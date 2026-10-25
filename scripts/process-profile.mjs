// scripts/process-profile.mjs
// One-off: crop + resize the profile photo to 800x800 head-and-shoulders.
// Usage: node scripts/process-profile.mjs
import sharp from "sharp";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const src = path.join(__dirname, "../assets-source/ganti_foto_profile.jpg");
const dst = path.join(__dirname, "../public/photo.jpg");

// Original: 3000 x 4000 portrait.
// Verified crop: left=750, top=1300, size=1500 → face centered, cap + raised thumb visible.
await sharp(src)
  .extract({ left: 750, top: 1300, width: 1500, height: 1500 })
  .resize(800, 800)
  .jpeg({ quality: 85 })
  .toFile(dst);

console.log(`✅  Saved ${dst}`);
