import { cpSync, existsSync, rmSync } from "node:fs";
import { execSync } from "node:child_process";

function run(command) {
  execSync(command, { stdio: "inherit", env: process.env });
}

run("npm run build");
run("npx prisma generate");

const viteOut = "vite-dist";

if (!existsSync(`${viteOut}/index.html`)) {
  throw new Error(`Vite build failed: ${viteOut}/index.html is missing`);
}

const requiredStaticAssets = [
  "images/home-bg-from-html.jpg",
  "resources-cover.png",
  "maat-hero-cover.png",
  "maat-dashboard-mockup.html",
  "logos/iso27001.png",
  "logos/iso42001.png",
  "logos/soc2.png",
];

const missingAssets = requiredStaticAssets.filter((asset) => !existsSync(`${viteOut}/${asset}`));
if (missingAssets.length > 0) {
  console.warn(
    "[vercel-build] Missing static assets in vite-dist (images/logos may 404 on mobile):\n",
    missingAssets.map((a) => `  - ${a}`).join("\n"),
  );
}

rmSync("public", { recursive: true, force: true });
cpSync(viteOut, "public", { recursive: true });

run("npx next build");
