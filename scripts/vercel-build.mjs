import { cpSync, existsSync, rmSync } from "node:fs";
import { execSync } from "node:child_process";

function run(command) {
  execSync(command, { stdio: "inherit", env: process.env });
}

run("npm run build");
run("npx prisma generate");

if (!existsSync("dist/index.html")) {
  throw new Error("Vite build failed: dist/index.html is missing");
}

rmSync("public", { recursive: true, force: true });
cpSync("dist", "public", { recursive: true });

run("npx next build");
