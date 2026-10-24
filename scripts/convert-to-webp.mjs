// Convierte todos los PNG de public/images/catalogo (recursivo) a WebP (calidad 80)
// y elimina los originales. Uso: node scripts/convert-to-webp.mjs
import { readdir, unlink, stat } from 'node:fs/promises'
import { join, extname } from 'node:path'
import sharp from 'sharp'

const ROOT = 'public/images/catalogo'
let before = 0
let after = 0

async function walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) {
      await walk(full)
    } else if (extname(entry.name).toLowerCase() === '.png') {
      const out = full.replace(/\.png$/i, '.webp')
      await sharp(full).webp({ quality: 80 }).toFile(out)
      before += (await stat(full)).size
      after += (await stat(out)).size
      await unlink(full)
      console.log('OK', full)
    }
  }
}

await walk(ROOT)
console.log(`Antes: ${(before / 1048576).toFixed(1)} MB -> Después: ${(after / 1048576).toFixed(1)} MB`)
