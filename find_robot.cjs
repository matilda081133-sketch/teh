const fs = require('fs');

async function findRobot() {
  const token = 'figd_DAqJLmQYO3C2PHVkTmuF7Ljri9nVCGOY85KAiNgN';
  const fileKey = 'iRzbkD6B7zGDZmpU5V3Bah';
  
  const imgRes = await fetch(`https://api.figma.com/v1/files/${fileKey}/images`, {
    headers: { 'X-Figma-Token': token }
  });
  const imgData = await imgRes.json();
  
  const figmaData = JSON.parse(fs.readFileSync('figma.json', 'utf8'));
  
  let targetRef = null;
  
  function traverse(node) {
    if (node.name && (node.name.toLowerCase().includes('robot') || node.name.toLowerCase().includes('робот') || node.name.toLowerCase().includes('hero') || node.name.includes('Image'))) {
      if (node.fills) {
        for (const fill of node.fills) {
          if (fill.type === 'IMAGE' && fill.imageRef) {
            console.log(`Found imageRef ${fill.imageRef} in node ${node.name} (${node.id})`);
            targetRef = fill.imageRef;
          }
        }
      }
    }
    if (node.children) {
      for (const child of node.children) {
        traverse(child);
      }
    }
  }
  
  traverse(figmaData.document);
  
  if (imgData.meta && imgData.meta.images) {
    let i = 0;
    for (const [ref, url] of Object.entries(imgData.meta.images)) {
      if (ref === targetRef) {
        console.log(`The robot image is img_${i}.png`);
        fs.copyFileSync(`public/img_${i}.png`, `public/robot.png`);
        console.log('Successfully copied to robot.png!');
        return;
      }
      i++;
    }
  }
}

findRobot().catch(console.error);
