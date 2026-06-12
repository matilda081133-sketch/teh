const fs = require('fs');

async function downloadMain() {
  const token = 'figd_DAqJLmQYO3C2PHVkTmuF7Ljri9nVCGOY85KAiNgN';
  const fileKey = 'iRzbkD6B7zGDZmpU5V3Bah';
  
  const imgRes = await fetch(`https://api.figma.com/v1/files/${fileKey}/images`, {
    headers: { 'X-Figma-Token': token }
  });
  const imgData = await imgRes.json();
  
  const refs = {
    'cnc_machine': '568f0c178bb950e3efebcc76998f60f1e503a94e',
    'small_part': 'a7068044f4f34a16e3b4471400f26845df41922b',
    'robot': '2fe91d0e7a0a53d9931dea229c47345d598bc38a'
  };
  
  if (imgData.meta && imgData.meta.images) {
    for (const [name, ref] of Object.entries(refs)) {
      const url = imgData.meta.images[ref];
      if (url) {
        console.log(`Downloading ${name}...`);
        const dl = await fetch(url);
        const buffer = await dl.arrayBuffer();
        fs.writeFileSync(`public/${name}.png`, Buffer.from(buffer));
        console.log(`Saved public/${name}.png`);
      } else {
        console.log(`URL not found for ${name} (ref: ${ref})`);
      }
    }
  }
}

downloadMain().catch(console.error);
