// scripts/process-favicon.mjs
// One-off: auto-crop Favicon.jpeg, pad 8%, produce icon sizes for Next.js.
// Usage: node scripts/process-favicon.mjs
import sharp from "sharp";
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const src = path.join(__dirname, "../assets-source/Favicon.jpeg");
const appDir = path.join(__dirname, "../app");

// ── 1. Trim white margin then convert to PNG buffer ─────────
const trimmedBuf = await sharp(src)
  .trim({ background: "#ffffff", threshold: 20 })
  .png()
  .toBuffer({ resolveWithObject: true });

const { width: tw, height: th } = trimmedBuf.info;
const side = Math.max(tw, th);

// ── 2. Pad to square with 8% on each side ───────────────────
const pad = Math.round(side * 0.08);

const paddedBuf = await sharp(trimmedBuf.data)
  .extend({
    top:    pad + Math.round((side - th) / 2),
    bottom: pad + (side - th) - Math.round((side - th) / 2),
    left:   pad + Math.round((side - tw) / 2),
    right:  pad + (side - tw) - Math.round((side - tw) / 2),
    background: { r: 255, g: 255, b: 255, alpha: 1 },
  })
  .png()
  .toBuffer();

// ── 3. Generate PNG sizes ────────────────────────────────────
const sizes = [
  { file: "icon.png",       size: 512 },
  { file: "apple-icon.png", size: 180 },
];

for (const { file, size } of sizes) {
  const dest = path.join(appDir, file);
  await sharp(paddedBuf).resize(size, size).png().toFile(dest);
  console.log(`✅  ${dest}`);
}

// ── 4. favicon.ico (16 + 32, embedded PNG images) ───────────
const ico16 = await sharp(paddedBuf).resize(16, 16).png().toBuffer();
const ico32 = await sharp(paddedBuf).resize(32, 32).png().toBuffer();

function icoBuffer(imgs) {
  const count = imgs.length;
  const headerSize = 6 + count * 16;
  let offset = headerSize;
  const entries = imgs.map(img => {
    const e = { data: img, offset };
    offset += img.length;
    return e;
  });
  const buf = Buffer.alloc(offset);
  buf.writeUInt16LE(0, 0);
  buf.writeUInt16LE(1, 2);
  buf.writeUInt16LE(count, 4);
  entries.forEach((e, i) => {
    const w = e.data.readUInt32BE(16);
    const h = e.data.readUInt32BE(20);
    const base2 = 6 + i * 16;
    buf.writeUInt8(w >= 256 ? 0 : w, base2);
    buf.writeUInt8(h >= 256 ? 0 : h, base2 + 1);
    buf.writeUInt8(0, base2 + 2);
    buf.writeUInt8(0, base2 + 3);
    buf.writeUInt16LE(1, base2 + 4);
    buf.writeUInt16LE(32, base2 + 6);
    buf.writeUInt32LE(e.data.length, base2 + 8);
    buf.writeUInt32LE(e.offset, base2 + 12);
    e.data.copy(buf, e.offset);
  });
  return buf;
}

const icoDest = path.join(appDir, "favicon.ico");
fs.writeFileSync(icoDest, icoBuffer([ico16, ico32]));
console.log(`✅  ${icoDest}`);
