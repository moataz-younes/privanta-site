import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const src = "c:/Users/Moataz/Downloads/background.html";
const outDir = path.join(__dirname, "../public/images");
const outFile = path.join(outDir, "home-bg-from-html.jpg");

const raw = fs.readFileSync(src, "utf8");
const marker = "url('data:image/jpeg;base64,";
const i = raw.indexOf(marker);
if (i < 0) {
  console.error("marker not found");
  process.exit(1);
}
const start = i + marker.length;
const end = raw.indexOf("')", start);
if (end < 0) {
  console.error("end delimiter not found");
  process.exit(1);
}
const b64 = raw.slice(start, end);
const buf = Buffer.from(b64, "base64");
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outFile, buf);
console.log("Wrote", outFile, buf.length, "bytes");
