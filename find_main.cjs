const fs = require('fs');
const figmaData = JSON.parse(fs.readFileSync('figma.json', 'utf8'));

let mainFrame = null;
function findMain(node) {
  if (node.name === 'Главная') mainFrame = node;
  if (node.children && !mainFrame) node.children.forEach(findMain);
}
findMain(figmaData.document);

function findImages(node, path) {
  const currentPath = path ? `${path} > ${node.name}` : node.name;
  if (node.fills) {
    for (const fill of node.fills) {
      if (fill.type === 'IMAGE' && fill.imageRef) {
        console.log(`[IMAGE] ${currentPath} -> imageRef: ${fill.imageRef} (Size: ${node.absoluteBoundingBox?.width}x${node.absoluteBoundingBox?.height})`);
      }
    }
  }
  if (node.children) {
    for (const child of node.children) findImages(child, currentPath);
  }
}
if (mainFrame) {
  findImages(mainFrame, '');
} else {
  console.log("Главная not found");
}
