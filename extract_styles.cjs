const fs = require('fs');
const figmaData = JSON.parse(fs.readFileSync('figma.json', 'utf8'));

let mainFrame = null;
function findMain(node) {
  if (node.name === 'Главная') mainFrame = node;
  if (node.children && !mainFrame) node.children.forEach(findMain);
}
findMain(figmaData.document);

function rgbaToHex(color) {
  if (!color) return 'transparent';
  const r = Math.round(color.r * 255);
  const g = Math.round(color.g * 255);
  const b = Math.round(color.b * 255);
  const a = color.a;
  if (a < 1) return `rgba(${r}, ${g}, ${b}, ${a.toFixed(2)})`;
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

function extractStyles(node, indent = '') {
  if (!node) return;
  
  let styles = [];
  if (node.absoluteBoundingBox) {
    styles.push(`W:${node.absoluteBoundingBox.width} H:${node.absoluteBoundingBox.height} X:${node.absoluteBoundingBox.x} Y:${node.absoluteBoundingBox.y}`);
  }
  
  if (node.fills && node.fills.length > 0) {
    const solidFills = node.fills.filter(f => f.type === 'SOLID').map(f => rgbaToHex(f.color));
    if (solidFills.length) styles.push(`bg: ${solidFills.join(', ')}`);
  }
  
  if (node.type === 'TEXT' && node.style) {
    styles.push(`font: ${node.style.fontFamily} ${node.style.fontWeight} ${node.style.fontSize}px`);
    styles.push(`letter-spacing: ${node.style.letterSpacing}px`);
    styles.push(`line-height: ${node.style.lineHeightPx}px`);
    styles.push(`text: "${node.characters.replace(/\n/g, '\\n').substring(0, 50)}"`);
  }
  
  if (node.layoutMode) {
    styles.push(`flex: ${node.layoutMode} gap:${node.itemSpacing} pad:${node.paddingTop}/${node.paddingRight}/${node.paddingBottom}/${node.paddingLeft}`);
  }
  
  if (node.cornerRadius) {
    styles.push(`radius: ${node.cornerRadius}`);
  }
  
  if (node.strokes && node.strokes.length > 0) {
    const strokeColors = node.strokes.filter(f => f.type === 'SOLID').map(f => rgbaToHex(f.color));
    styles.push(`border: ${node.strokeWeight}px ${strokeColors.join(', ')}`);
  }

  console.log(`${indent}${node.name} [${node.type}] -> ${styles.join(' | ')}`);
  
  if (node.children) {
    node.children.forEach(child => extractStyles(child, indent + '  '));
  }
}

if (mainFrame) {
  extractStyles(mainFrame);
}
