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

rmSync("public", { recursive: true, force: true });
cpSync(viteOut, "public", { recursive: true });

run("npx next build");
