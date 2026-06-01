/**
 * One-shot Vercel project setup (settings + env vars + optional redeploy).
 *
 * Usage:
 *   set VERCEL_TOKEN=your_token_from_https://vercel.com/account/tokens
 *   set VERCEL_PROJECT=privanta-site
 *   npm run vercel:setup
 *
 * Optional: VERCEL_TEAM_ID if the project is under a team.
 * Reads secrets from .env in the project root (never commit .env).
 */
import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const token = process.env.VERCEL_TOKEN;
const projectName = process.env.VERCEL_PROJECT ?? "privanta-site";
const teamId = process.env.VERCEL_TEAM_ID;
const appUrl =
  process.env.NEXT_PUBLIC_APP_URL ?? `https://${projectName}.vercel.app`;
const shouldRedeploy = process.env.VERCEL_REDEPLOY !== "0";

const ENV_KEYS = [
  "DATABASE_URL",
  "RESEND_API_KEY",
  "RESEND_FROM_EMAIL",
  "UPSTASH_REDIS_REST_URL",
  "UPSTASH_REDIS_REST_TOKEN",
  "NEXT_PUBLIC_APP_URL",
  "VITE_MAIN_SITE_URL",
  "VITE_PLATFORM_SITE_URL",
  "VITE_MAAT_SITE_URL",
];

function teamQuery() {
  return teamId ? `?teamId=${encodeURIComponent(teamId)}` : "";
}

async function vercelApi(path, options = {}) {
  const url = `https://api.vercel.com${path}${teamQuery()}`;
  const response = await fetch(url, {
    ...options,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  const text = await response.text();
  let data = null;
  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = { raw: text };
  }

  if (!response.ok) {
    const message = data?.error?.message ?? data?.message ?? text ?? response.statusText;
    throw new Error(`Vercel API ${response.status} ${path}: ${message}`);
  }

  return data;
}

function parseDotEnv(filePath) {
  if (!existsSync(filePath)) {
    return {};
  }

  const vars = {};
  const lines = readFileSync(filePath, "utf8").split(/\r?\n/);

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    vars[key] = value;
  }

  return vars;
}

async function updateProjectSettings() {
  console.log("→ Updating project build settings…");

  await vercelApi(`/v9/projects/${encodeURIComponent(projectName)}`, {
    method: "PATCH",
    body: JSON.stringify({
      framework: "nextjs",
      buildCommand: "node scripts/vercel-build.mjs",
      installCommand: "npm ci",
      outputDirectory: null,
      nodeVersion: "20.x",
    }),
  });

  console.log("  ✓ Framework: Next.js");
  console.log("  ✓ Build: node scripts/vercel-build.mjs");
  console.log("  ✓ Output Directory: auto (cleared dist override)");
  console.log("  ✓ Node.js: 20.x");
}

async function listEnvVars() {
  const data = await vercelApi(`/v9/projects/${encodeURIComponent(projectName)}/env`);
  return data?.envs ?? data ?? [];
}

async function upsertEnvVar(key, value, targets = ["production", "preview"]) {
  const existing = await listEnvVars();
  const found = Array.isArray(existing)
    ? existing.find((item) => item.key === key && item.target?.some((t) => targets.includes(t)))
    : null;

  if (found?.id) {
    await vercelApi(
      `/v9/projects/${encodeURIComponent(projectName)}/env/${found.id}`,
      {
        method: "PATCH",
        body: JSON.stringify({
          value,
          target: targets,
          type: "encrypted",
        }),
      },
    );
    console.log(`  ✓ Updated env: ${key}`);
    return;
  }

  await vercelApi(`/v10/projects/${encodeURIComponent(projectName)}/env`, {
    method: "POST",
    body: JSON.stringify({
      key,
      value,
      type: "encrypted",
      target: targets,
    }),
  });
  console.log(`  ✓ Created env: ${key}`);
}

async function syncEnvFromDotEnv() {
  const envPath = resolve(process.cwd(), ".env");
  const vars = parseDotEnv(envPath);

  if (!vars.NEXT_PUBLIC_APP_URL) {
    vars.NEXT_PUBLIC_APP_URL = appUrl;
  }

  const toSync = ENV_KEYS.filter((key) => vars[key]?.trim());
  if (toSync.length === 0) {
    console.log("→ No .env file or no matching keys — skipping env sync.");
    console.log("  Create .env from .env.example and run again.");
    return;
  }

  console.log(`→ Syncing ${toSync.length} variable(s) from .env…`);
  for (const key of toSync) {
    await upsertEnvVar(key, vars[key].trim());
  }
}

async function triggerProductionDeploy() {
  console.log("→ Triggering production deployment…");

  const project = await vercelApi(`/v9/projects/${encodeURIComponent(projectName)}`);
  const repo = project?.link;
  if (!repo?.type || repo.type !== "github") {
    console.log("  ⚠ Git not linked — push to main or run: npx vercel deploy --prod");
    return;
  }

  await vercelApi(`/v13/deployments`, {
    method: "POST",
    body: JSON.stringify({
      name: projectName,
      target: "production",
      gitSource: {
        type: "github",
        ref: repo.productionBranch ?? "main",
        repoId: repo.repoId,
        org: repo.org,
        repo: repo.repo,
      },
    }),
  });

  console.log("  ✓ Production deployment queued");
}

async function main() {
  if (!token) {
    console.error(`
Missing VERCEL_TOKEN.

1. Open https://vercel.com/account/tokens
2. Create Token (Full Account or scoped to your team)
3. Run:

   PowerShell:
   $env:VERCEL_TOKEN="paste_token_here"
   $env:VERCEL_PROJECT="privanta-site"
   npm run vercel:setup
`);
    process.exit(1);
  }

  console.log(`\nVercel setup — project: ${projectName}\n`);

  await updateProjectSettings();
  await syncEnvFromDotEnv();

  if (shouldRedeploy) {
    try {
      await triggerProductionDeploy();
    } catch (error) {
      console.log(`  ⚠ Deploy trigger failed: ${error.message}`);
      console.log("  Push to GitHub main or run: npx vercel deploy --prod");
    }
  }

  console.log(`
Done. Check: https://vercel.com/dashboard → ${projectName} → Deployments
Site URL: ${appUrl}
`);
}

main().catch((error) => {
  console.error("\nSetup failed:", error.message);
  process.exit(1);
});
