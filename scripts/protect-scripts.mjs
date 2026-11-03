import fs from "node:fs";
import path from "node:path";
// Astro's router and page-load handlers must keep their module execution order.
// Cloudflare requires this attribute in delivered HTML, before any src attribute.
function visit(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) visit(file);
    else if (file.endsWith(".html")) {
      const html = fs.readFileSync(file, "utf8");
      fs.writeFileSync(
        file,
        html.replace(
          /<script\b(?![^>]*\bdata-cfasync\s*=)/gi,
          '<script data-cfasync="false"',
        ),
      );
    }
  }
}
visit("dist");
