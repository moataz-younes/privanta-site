import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const src = "c:/Users/Moataz/Downloads/hero-section.html";
const outDir = path.join(__dirname, "../public/images");

const raw = fs.readFileSync(src, "utf8");

const bgMarker = "url('data:image/jpeg;base64,";
const bgStart = raw.indexOf(bgMarker);
if (bgStart < 0) {
  console.error("bg marker not found");
  process.exit(1);
}
const bgDataStart = bgStart + bgMarker.length;
const bgEnd = raw.indexOf("')", bgDataStart);
const bgBuf = Buffer.from(raw.slice(bgDataStart, bgEnd), "base64");

const logoMarker = '<img src="data:image/png;base64,';
const logoStart = raw.indexOf(logoMarker);
if (logoStart < 0) {
  console.error("logo marker not found");
  process.exit(1);
}
const logoDataStart = logoStart + logoMarker.length;
const logoEnd = raw.indexOf('"', logoDataStart);
const logoBuf = Buffer.from(raw.slice(logoDataStart, logoEnd), "base64");

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "company-hero-bg.jpg"), bgBuf);
fs.writeFileSync(path.join(outDir, "company-hero-logo.png"), logoBuf);
console.log("Wrote company-hero-bg.jpg", bgBuf.length, "bytes");
console.log("Wrote company-hero-logo.png", logoBuf.length, "bytes");
