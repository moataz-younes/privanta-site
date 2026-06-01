import fs from "node:fs";

const path = "c:/Users/Moataz/Downloads/privanta site/src/pages/Company.tsx";
let s = fs.readFileSync(path, "utf8");
if (s.includes("Ø§Ù„")) {
  s = Buffer.from(s, "latin1").toString("utf8");
  fs.writeFileSync(path, s, "utf8");
  console.log("fixed mojibake");
} else {
  console.log("no mojibake");
}
