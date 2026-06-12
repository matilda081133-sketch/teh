const fs = require('fs');
const data = JSON.parse(fs.readFileSync('figma.json'));

let robotRef = null;
let cncRef = null;

function traverse(node) {
  if (node.name === 'Без имени-1 1' && node.fills) {
    const fill = node.fills.find(f => f.type === 'IMAGE');
    if (fill) robotRef = fill.imageRef;
  }
  if (node.name === 'SIDA-09' && node.fills) {
    const fill = node.fills.find(f => f.type === 'IMAGE');
    if (fill) cncRef = fill.imageRef;
  }
  if (node.children) node.children.forEach(traverse);
}
traverse(data.document);
console.log('Robot Ref:', robotRef);
console.log('CNC Ref:', cncRef);
