const fs = require('fs');
const data = JSON.parse(fs.readFileSync('figma.json'));

let mainNode = null;
function findMain(node) {
  if (node.name === 'Главная' && node.type === 'FRAME') mainNode = node;
  if (!mainNode && node.children) node.children.forEach(findMain);
}
findMain(data.document);

function traverse(node) {
  if (node.absoluteBoundingBox) {
    const x = Math.round(node.absoluteBoundingBox.x);
    const y = Math.round(node.absoluteBoundingBox.y);
    if (x === 100 && y === 40) {
      console.log('Found node at 100,40:', node.id, node.name, node.type);
    }
  }
  if (node.children) {
    node.children.forEach(traverse);
  }
}
traverse(mainNode);
