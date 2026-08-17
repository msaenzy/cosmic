const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

// Minimal PNG encoder with true alpha support and crisp vector-like shapes
function createPNG(width, height, drawFn) {
  // RGBA buffer
  const buffer = Buffer.alloc(width * height * 4);

  // Helper drawing functions
  const setPixel = (x, y, r, g, b, a = 255) => {
    if (x < 0 || x >= width || y < 0 || y >= height) return;
    const idx = (y * width + x) * 4;
    // Alpha blending
    const srcA = a / 255;
    const dstA = buffer[idx + 3] / 255;
    const outA = srcA + dstA * (1 - srcA);
    if (outA > 0) {
      buffer[idx] = Math.round((r * srcA + buffer[idx] * dstA * (1 - srcA)) / outA);
      buffer[idx + 1] = Math.round((g * srcA + buffer[idx + 1] * dstA * (1 - srcA)) / outA);
      buffer[idx + 2] = Math.round((b * srcA + buffer[idx + 2] * dstA * (1 - srcA)) / outA);
      buffer[idx + 3] = Math.round(outA * 255);
    }
  };

  const drawCircle = (cx, cy, radius, r, g, b, a = 255, fill = true) => {
    const r2 = radius * radius;
    const innerR2 = (radius - 4) * (radius - 4);
    for (let y = Math.floor(cy - radius - 1); y <= Math.ceil(cy + radius + 1); y++) {
      for (let x = Math.floor(cx - radius - 1); x <= Math.ceil(cx + radius + 1); x++) {
        const d2 = (x - cx) * (x - cx) + (y - cy) * (y - cy);
        if (fill && d2 <= r2) {
          const edgeAlpha = Math.min(1, Math.max(0, radius + 0.5 - Math.sqrt(d2))) * a;
          setPixel(x, y, r, g, b, edgeAlpha);
        } else if (!fill && d2 <= r2 && d2 >= innerR2) {
          setPixel(x, y, r, g, b, a);
        }
      }
    }
  };

  const drawStar = (cx, cy, size, r, g, b, a = 255) => {
    for (let d = -size; d <= size; d++) {
      const alpha = Math.max(0, 1 - Math.abs(d) / size) * a;
      setPixel(cx + d, cy, r, g, b, alpha);
      setPixel(cx, cy + d, r, g, b, alpha);
    }
    drawCircle(cx, cy, size / 3, r, g, b, a, true);
  };

  const drawRect = (rx, ry, rw, rh, r, g, b, a = 255) => {
    for (let y = ry; y < ry + rh; y++) {
      for (let x = rx; x < rx + rw; x++) {
        setPixel(x, y, r, g, b, a);
      }
    }
  };

  drawFn({ width, height, setPixel, drawCircle, drawStar, drawRect });

  // PNG File construction
  const pngSignature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  // IHDR chunk
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData[8] = 8; // Bit depth
  ihdrData[9] = 6; // Color type: RGBA
  ihdrData[10] = 0; // Compression
  ihdrData[11] = 0; // Filter
  ihdrData[12] = 0; // Interlace

  const makeChunk = (type, data) => {
    const len = data.length;
    const chunk = Buffer.alloc(12 + len);
    chunk.writeUInt32BE(len, 0);
    chunk.write(type, 4);
    data.copy(chunk, 8);
    const crc = crc32(chunk.subarray(4, 8 + len));
    chunk.writeInt32BE(crc, 8 + len);
    return chunk;
  };

  // Raw image scanlines with filter byte 0
  const rawScanlines = Buffer.alloc(height * (width * 4 + 1));
  for (let y = 0; y < height; y++) {
    rawScanlines[y * (width * 4 + 1)] = 0; // No filter
    buffer.copy(rawScanlines, y * (width * 4 + 1) + 1, y * width * 4, (y + 1) * width * 4);
  }

  const compressedData = zlib.deflateSync(rawScanlines);
  const ihdrChunk = makeChunk('IHDR', ihdrData);
  const idatChunk = makeChunk('IDAT', compressedData);
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([pngSignature, ihdrChunk, idatChunk, iendChunk]);
}

// CRC32 table
const crcTable = new Int32Array(256);
for (let n = 0; n < 256; n++) {
  let c = n;
  for (let k = 0; k < 8; k++) {
    if (c & 1) c = 0xedb88320 ^ (c >>> 1);
    else c = c >>> 1;
  }
  crcTable[n] = c;
}

function crc32(buf) {
  let crc = -1;
  for (let i = 0; i < buf.length; i++) {
    crc = crcTable[(crc ^ buf[i]) & 0xff] ^ (crc >>> 8);
  }
  return crc ^ -1;
}

const targetDir = path.join(__dirname, '..', 'src', 'assets', 'img');
const publicDir = path.join(__dirname, '..', 'public', 'assets', 'img');
fs.mkdirSync(targetDir, { recursive: true });
fs.mkdirSync(publicDir, { recursive: true });

// 1. hozier.png: Cosmic acoustic/nature aesthetic, planetary rings, green & deep purple flora
const hozierPNG = createPNG(480, 480, ({ width, height, drawCircle, drawStar, drawRect }) => {
  const cx = width / 2;
  const cy = height / 2;
  // Celestial crescent moon / vinyl
  drawCircle(cx, cy, 140, 36, 27, 54, 230, true);
  drawCircle(cx - 30, cy - 20, 110, 201, 239, 212, 240, true);
  // Rings
  for (let r = 160; r <= 190; r += 6) {
    drawCircle(cx, cy, r, 59, 36, 101, 140, false);
  }
  // Plant / Vine motif elements
  drawCircle(cx + 40, cy + 60, 45, 47, 168, 232, 210, true);
  drawCircle(cx - 50, cy + 80, 30, 217, 201, 240, 220, true);
  // Stars
  drawStar(cx + 100, cy - 80, 18, 251, 239, 224, 255);
  drawStar(cx - 110, cy - 50, 14, 201, 239, 212, 255);
  drawStar(cx + 60, cy + 130, 12, 255, 255, 255, 255);
  drawStar(cx - 90, cy + 110, 16, 255, 255, 255, 255);
});

// 2. personalizables.png: Cosmic customizable badge, starburst & monogram frame
const personalizablesPNG = createPNG(480, 480, ({ width, height, drawCircle, drawStar, drawRect }) => {
  const cx = width / 2;
  const cy = height / 2;
  // Lilac / celestial glow orb
  drawCircle(cx, cy, 150, 217, 201, 240, 230, true);
  drawCircle(cx, cy, 120, 59, 36, 101, 240, true);
  drawCircle(cx, cy, 90, 191, 227, 250, 220, true);
  // Orbiting celestial satellites
  drawCircle(cx + 130, cy - 60, 24, 47, 168, 232, 250, true);
  drawCircle(cx - 120, cy + 70, 20, 251, 239, 224, 250, true);
  // Customization sparkles & cross-stars
  drawStar(cx, cy, 40, 255, 255, 255, 255);
  drawStar(cx + 80, cy + 80, 16, 251, 239, 224, 255);
  drawStar(cx - 80, cy - 80, 20, 217, 201, 240, 255);
});

// 3. posters.png: Art print poster frame with celestial landscape
const postersPNG = createPNG(480, 480, ({ width, height, drawCircle, drawStar, drawRect }) => {
  const cx = width / 2;
  const cy = height / 2;
  // Poster canvas
  drawRect(cx - 110, cy - 140, 220, 280, 251, 239, 224, 240);
  drawRect(cx - 100, cy - 130, 200, 260, 36, 27, 54, 255);
  // Graphic artwork inside poster
  drawCircle(cx, cy - 20, 60, 217, 201, 240, 240, true);
  drawCircle(cx + 20, cy + 40, 45, 47, 168, 232, 230, true);
  drawCircle(cx - 30, cy + 50, 35, 201, 239, 212, 220, true);
  drawStar(cx - 40, cy - 70, 15, 251, 239, 224, 255);
  drawStar(cx + 50, cy - 60, 12, 255, 255, 255, 255);
});

// 4. stickers.png: Die-cut vinyl stickers (planets, badges, astronauts)
const stickersPNG = createPNG(480, 480, ({ width, height, drawCircle, drawStar, drawRect }) => {
  const cx = width / 2;
  const cy = height / 2;
  // Sticker 1: Big planet with white die-cut border
  drawCircle(cx - 40, cy - 30, 95, 255, 255, 255, 255, true);
  drawCircle(cx - 40, cy - 30, 85, 47, 168, 232, 255, true);
  drawCircle(cx - 20, cy - 40, 35, 191, 227, 250, 240, true);
  // Sticker 2: Star badge
  drawCircle(cx + 80, cy + 50, 65, 255, 255, 255, 255, true);
  drawCircle(cx + 80, cy + 50, 55, 217, 201, 240, 255, true);
  drawStar(cx + 80, cy + 50, 28, 59, 36, 101, 255);
  // Sticker 3: Small cosmic badge
  drawCircle(cx - 80, cy + 90, 45, 255, 255, 255, 255, true);
  drawCircle(cx - 80, cy + 90, 38, 201, 239, 212, 255, true);
  drawStar(cx - 80, cy + 90, 16, 36, 27, 54, 255);
});

// 5. ymuchomas.png: Holographic constellation pin & tote/stationery icons
const ymuchomasPNG = createPNG(480, 480, ({ width, height, drawCircle, drawStar, drawRect }) => {
  const cx = width / 2;
  const cy = height / 2;
  // Deep space portal
  drawCircle(cx, cy, 140, 255, 255, 255, 120, true);
  drawCircle(cx, cy, 130, 59, 36, 101, 250, true);
  drawCircle(cx, cy, 100, 47, 168, 232, 220, true);
  drawCircle(cx, cy, 65, 217, 201, 240, 240, true);
  // Sparkles & accessories constellation
  drawStar(cx, cy, 32, 251, 239, 224, 255);
  drawStar(cx + 90, cy - 60, 18, 201, 239, 212, 255);
  drawStar(cx - 90, cy + 50, 18, 191, 227, 250, 255);
  drawStar(cx + 70, cy + 80, 14, 255, 255, 255, 255);
});

const files = [
  { name: 'hozier.png', buffer: hozierPNG },
  { name: 'personalizables.png', buffer: personalizablesPNG },
  { name: 'posters.png', buffer: postersPNG },
  { name: 'stickers.png', buffer: stickersPNG },
  { name: 'ymuchomas.png', buffer: ymuchomasPNG },
];

for (const { name, buffer } of files) {
  fs.writeFileSync(path.join(targetDir, name), buffer);
  fs.writeFileSync(path.join(publicDir, name), buffer);
  console.log(`Generated transparent cosmic asset: ${name} (${buffer.length} bytes)`);
}
