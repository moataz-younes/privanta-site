import fs from "fs";

const src = "c:/Users/Moataz/Downloads/maat_ai_dashboard_mockup_v3.html";
const dest = "c:/Users/Moataz/Downloads/privanta site/public/maat-dashboard-mockup.html";

let body = fs.readFileSync(src, "utf8").trim();
body = body.replace(
  /<link href="https:\/\/fonts\.googleapis\.com[^>]+>\s*/i,
  "",
);

const extra = `
  * { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; background: #070e1c; font-family: 'Cairo', sans-serif; }
  .sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0; }
`;

body = body.replace("<style>", `<style>${extra}`);

const html = `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>MAAT AI Dashboard</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap" rel="stylesheet">
</head>
<body>
${body}
</body>
</html>
`;

fs.writeFileSync(dest, html, "utf8");

const match = html.match(/nav-item active">([^<]+)/);
console.log("nav label:", match?.[1] ?? "missing");
