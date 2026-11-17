// Renders one hero clip from scenes.html, frame by frame, into an mp4.
// Usage: node scripts/hero-video/render.mjs <home|code|servers|network> 24 12 out.mp4
// Then encode for the web as described in README.md next to this file.
import { createRequire } from "node:module";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import path from "node:path";

// Playwright is not a site dependency; use a global install (require honours NODE_PATH).
const { chromium } = createRequire(import.meta.url)("playwright");
const dir = path.dirname(fileURLToPath(import.meta.url));
const [, , scene, fps = "24", secs = "12", out, stills] = process.argv;
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
await page.goto("file://" + path.join(dir, "scenes.html"));

if (stills) {
  for (const t of stills.split(",")) {
    await page.evaluate(([s, t]) => window.draw(s, +t), [scene, t]);
    await page.screenshot({ path: `${out}-${t}.png` });
  }
} else {
  const frames = +fps * +secs;
  const ffmpeg = spawn(
    "ffmpeg",
    ["-y", "-loglevel", "error", "-f", "image2pipe", "-framerate", fps, "-i", "-",
     "-c:v", "libx264", "-preset", "slow", "-crf", "14", "-pix_fmt", "yuv420p", out],
    { stdio: ["pipe", "inherit", "inherit"] }
  );
  for (let i = 0; i < frames; i++) {
    await page.evaluate(([s, t]) => window.draw(s, t), [scene, i / +fps]);
    ffmpeg.stdin.write(await page.screenshot({ type: "png" }));
  }
  ffmpeg.stdin.end();
  await new Promise((resolve) => ffmpeg.on("close", resolve));
}
await browser.close();
