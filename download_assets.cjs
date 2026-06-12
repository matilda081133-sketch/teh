const fs = require('fs');

async function download() {
  const token = 'figd_DAqJLmQYO3C2PHVkTmuF7Ljri9nVCGOY85KAiNgN';
  const fileKey = 'iRzbkD6B7zGDZmpU5V3Bah';
  
  console.log('Downloading SVG Logo...');
  // Download Logo as SVG
  const logoId = '2078:3544'; 
  const svgRes = await fetch(`https://api.figma.com/v1/images/${fileKey}?ids=${logoId}&format=svg`, {
    headers: { 'X-Figma-Token': token }
  });
  const svgData = await svgRes.json();
  if (svgData.images && svgData.images[logoId]) {
    const svgUrl = svgData.images[logoId];
    const dl = await fetch(svgUrl);
    const svgText = await dl.text();
    fs.writeFileSync('public/logo.svg', svgText);
    console.log('Saved logo.svg');
  }

  console.log('Downloading raster images...');
  // Download all image fills
  const imgRes = await fetch(`https://api.figma.com/v1/files/${fileKey}/images`, {
    headers: { 'X-Figma-Token': token }
  });
  const imgData = await imgRes.json();
  
  if (imgData.meta && imgData.meta.images) {
    let i = 0;
    for (const [ref, url] of Object.entries(imgData.meta.images)) {
      console.log(`Downloading image ${i}...`);
      const dl = await fetch(url);
      const buffer = await dl.arrayBuffer();
      fs.writeFileSync(`public/img_${i}.png`, Buffer.from(buffer));
      i++;
    }
    console.log(`Saved ${i} images from Figma.`);
  }
}

download().catch(console.error);
