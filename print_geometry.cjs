const fs = require('fs');
const figmaData = JSON.parse(fs.readFileSync('figma.json', 'utf8'));

let mainFrame = null;
function findMain(node) {
  if (node.name === 'Главная') mainFrame = node;
  if (node.children && !mainFrame) node.children.forEach(findMain);
}
findMain(figmaData.document);

function printGeometry(node, indent = '') {
  if (!node) return;
  // Only print interesting nodes to avoid clutter
  if (node.absoluteBoundingBox && node.absoluteBoundingBox.width > 50) {
    console.log(`${indent}${node.name} (${node.type}) - W:${node.absoluteBoundingBox.width} H:${node.absoluteBoundingBox.height} X:${node.absoluteBoundingBox.x} Y:${node.absoluteBoundingBox.y}`);
  }
  if (node.children) {
    node.children.forEach(child => printGeometry(child, indent + '  '));
  }
}

if (mainFrame) {
  // Let's find the hero section
  let heroGroup = null;
  // the hero group probably has the title and images.
  printGeometry(mainFrame);
}
