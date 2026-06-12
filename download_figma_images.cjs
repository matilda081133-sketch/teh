const fs = require('fs');
const path = require('path');
const https = require('https');

const TOKEN = 'figd_DAqJLmQYO3C2PHVkTmuF7Ljri9nVCGOY85KAiNgN';
const FILE_KEY = 'iRzbkD6B7zGDZmpU5V3Bah';
const FIGMA_JSON = 'figma.json';
const IMG_DIR = path.join(__dirname, 'public', 'images');

if (!fs.existsSync(IMG_DIR)) fs.mkdirSync(IMG_DIR, { recursive: true });

const data = JSON.parse(fs.readFileSync(FIGMA_JSON, 'utf8'));

let imageNodes = {};

function hasImageFill(node) {
  if (!node.fills) return false;
  return node.fills.some(f => f.type === 'IMAGE');
}

function traverseForImages(node) {
  if (hasImageFill(node)) {
    imageNodes[node.id] = { ext: 'png' };
  }
  if (node.children) {
    node.children.forEach(traverseForImages);
  }
}

if (data.document && data.document.children) {
  data.document.children.forEach(canvas => {
    if (canvas.children) {
      canvas.children.forEach(node => {
        if (node.type === 'FRAME' || node.type === 'COMPONENT') traverseForImages(node);
      });
    }
  });
}

const pngs = Object.keys(imageNodes);
console.log(`Found ${pngs.length} photographic images to download.`);

async function fetchFigmaImages(ids) {
  return new Promise((resolve, reject) => {
    const chunkStr = ids.join(',');
    const options = {
      hostname: 'api.figma.com',
      path: `/v1/images/${FILE_KEY}?ids=${chunkStr}&format=png&scale=2`,
      method: 'GET',
      headers: { 'X-Figma-Token': TOKEN }
    };
    https.get(options, res => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(body);
          if (json.images) resolve(json.images);
          else reject(json.err || 'No images field');
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

async function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    if (!url) return resolve();
    const file = fs.createWriteStream(dest);
    https.get(url, response => {
      response.pipe(file);
      file.on('finish', () => { file.close(); resolve(); });
    }).on('error', err => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function main() {
  for (let i = 0; i < pngs.length; i += 20) {
    const chunk = pngs.slice(i, i + 20);
    console.log(`Fetching PNG batch ${Math.floor(i/20) + 1}...`);
    try {
      const urls = await fetchFigmaImages(chunk);
      for (const id of Object.keys(urls)) {
        const safeId = id.replace(/:/g, '_');
        await downloadFile(urls[id], path.join(IMG_DIR, `${safeId}.png`));
      }
    } catch(e) { console.error('Error fetching PNGs:', e); }
  }
  
  console.log('Finished downloading all photos!');
}

main();
