const fs = require('fs');

async function downloadImages() {
  const token = 'figd_DAqJLmQYO3C2PHVkTmuF7Ljri9nVCGOY85KAiNgN';
  const fileKey = 'iRzbkD6B7zGDZmpU5V3Bah';
  
  const imgRes = await fetch(`https://api.figma.com/v1/files/${fileKey}/images`, {
    headers: { 'X-Figma-Token': token }
  });
  const imgData = await imgRes.json();
  
  const css = fs.readFileSync('src/FigmaMain.css', 'utf8');
  const regex = /url\('\/([a-f0-9]+)\.png'\)/g;
  let match;
  const refs = new Set();
  
  while ((match = regex.exec(css)) !== null) {
    refs.add(match[1]);
  }
  
  console.log('Found image refs in CSS:', Array.from(refs));
  
  if (imgData.meta && imgData.meta.images) {
    for (const ref of refs) {
      const url = imgData.meta.images[ref];
      if (url) {
        console.log(`Downloading ${ref}.png...`);
        const dl = await fetch(url);
        const buffer = await dl.arrayBuffer();
        fs.writeFileSync(`public/${ref}.png`, Buffer.from(buffer));
      } else {
        console.log(`URL not found for ref: ${ref}`);
      }
    }
  }
}
downloadImages().catch(console.error);
