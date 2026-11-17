# Hero videos

The looping backgrounds in `public/video/` are drawn by `scenes.html` (canvas, no stock footage, so no licence to track) and recorded with `render.mjs`. Every motion repeats exactly every 12 seconds, so the loop has no jump.

Clips: `home` (code editors over a network), `code` (scrolling code and a build log), `servers` (server racks and data streams), `network` (globe with Nairobi to US links).

To change one, edit `scenes.html`, then from the repo root (needs Playwright's Chromium and ffmpeg):

```bash
node scripts/hero-video/render.mjs network 24 12 /tmp/network-raw.mp4
cd public/video
ffmpeg -i /tmp/network-raw.mp4 -c:v libx264 -preset veryslow -crf 28 -pix_fmt yuv420p -movflags +faststart -an network.mp4
ffmpeg -i /tmp/network-raw.mp4 -vf scale=640:360 -c:v libx264 -preset veryslow -crf 28 -pix_fmt yuv420p -movflags +faststart -an network-sm.mp4
ffmpeg -i /tmp/network-raw.mp4 -c:v libvpx-vp9 -crf 40 -b:v 0 -row-mt 1 -an network.webm
ffmpeg -ss 4.5 -i /tmp/network-raw.mp4 -vframes 1 -c:v libwebp -quality 70 network-poster.webp
```
