// scripts/copy-caricature.mjs
// Copies karikatur.png resized to max 1200px wide → public/images/caricature.png
import sharp from "sharp";
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const src = path.join(__dirname, "../assets-source/karikatur.png");
const dest = path.join(__dirname, "../public/images/caricature.png");
fs.mkdirSync(path.dirname(dest), { recursive: true });

await sharp(src)
  .resize({ width: 1200, withoutEnlargement: true })
  .png({ compressionLevel: 8 })
  .toFile(dest);

console.log(`✅  Saved ${dest}`);
