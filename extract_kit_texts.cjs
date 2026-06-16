const data = require('./figma_kit.json');
const node = data.nodes['2029:1163'].document;
const texts = [];

function extract(n) {
  if (n.characters) {
    const box = n.absoluteBoundingBox;
    const pos = box ? `${box.x},${box.y} ${box.width}x${box.height}` : '';
    const fs = n.style ? n.style.fontSize : '';
    const fw = n.style ? n.style.fontWeight : '';
    texts.push({ name: n.name, text: n.characters, pos, fs, fw });
  }
  if (n.children) n.children.forEach(extract);
}

extract(node);

// Filter out footer duplicates (y > 2400)
const mainTexts = texts.filter(t => {
  const y = parseFloat(t.pos.split(',')[1]);
  return y < 2400 || isNaN(y);
});

const fs = require('fs');
fs.writeFileSync('kit_texts_clean.json', JSON.stringify(mainTexts, null, 2), 'utf8');
console.log('Extracted ' + mainTexts.length + ' text nodes');
