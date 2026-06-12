const fs = require('fs');
const data = JSON.parse(fs.readFileSync('figma.json'));

let mainNode = null;
function findMain(node) {
  if (node.name === 'Главная' && node.type === 'FRAME') {
    mainNode = node;
  }
  if (!mainNode && node.children) {
    node.children.forEach(findMain);
  }
}
findMain(data.document);

if (!mainNode) {
  console.log('Main node not found');
  process.exit(1);
}

let jsx = `import React from 'react';\nimport './FigmaMain.css';\n\nexport default function FigmaMain() {\n  return (\n    <div className="figma-page">\n`;
let css = `.figma-page {\n  position: relative;\n  width: ${mainNode.absoluteBoundingBox.width}px;\n  height: ${mainNode.absoluteBoundingBox.height}px;\n  background: #0b0b0c;\n  overflow: hidden;\n  margin: 0 auto;\n}\n\n`;

function toCSSName(str) {
  return str.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase();
}

function processNode(node, parentBox, depth = 3) {
  if (node.visible === false) return;
  const id = 'n' + node.id.replace(/[^a-zA-Z0-9]/g, '-');
  const box = node.absoluteBoundingBox;
  if (!box) return;
  
  const left = box.x - mainNode.absoluteBoundingBox.x;
  const top = box.y - mainNode.absoluteBoundingBox.y;
  const width = box.width;
  const height = box.height;
  
  css += `.${id} {\n  position: absolute;\n  left: ${left}px;\n  top: ${top}px;\n  width: ${width}px;\n  height: ${height}px;\n`;
  
  let content = '';
  if (node.type === 'TEXT') {
    css += `  font-family: "${node.style.fontFamily}", sans-serif;\n`;
    css += `  font-size: ${node.style.fontSize}px;\n`;
    css += `  font-weight: ${node.style.fontWeight};\n`;
    css += `  line-height: ${node.style.lineHeightPx}px;\n`;
    css += `  letter-spacing: ${node.style.letterSpacing}px;\n`;
    if (node.style.textAlignHorizontal === 'CENTER') css += `  text-align: center;\n`;
    if (node.style.textAlignHorizontal === 'RIGHT') css += `  text-align: right;\n`;
    
    // Add color
    if (node.fills && node.fills.length > 0 && node.fills[0].color) {
      const c = node.fills[0].color;
      css += `  color: rgba(${Math.round(c.r*255)}, ${Math.round(c.g*255)}, ${Math.round(c.b*255)}, ${node.fills[0].opacity ?? c.a});\n`;
    }
    
    content = node.characters.replace(/\n/g, '<br />');
  } else if (node.type === 'RECTANGLE' || node.type === 'ELLIPSE' || node.type === 'FRAME') {
    if (node.fills && node.fills.length > 0) {
      const fill = node.fills[0];
      if (fill.type === 'SOLID') {
        const c = fill.color;
        css += `  background-color: rgba(${Math.round(c.r*255)}, ${Math.round(c.g*255)}, ${Math.round(c.b*255)}, ${fill.opacity ?? c.a});\n`;
      } else if (fill.type === 'IMAGE') {
        css += `  background-image: url('/${fill.imageRef}.png');\n  background-size: cover;\n`;
      }
    }
    if (node.cornerRadius) {
      css += `  border-radius: ${node.cornerRadius}px;\n`;
    }
    if (node.strokes && node.strokes.length > 0) {
      const s = node.strokes[0];
      if (s.type === 'SOLID') {
        const c = s.color;
        css += `  border: ${node.strokeWeight}px solid rgba(${Math.round(c.r*255)}, ${Math.round(c.g*255)}, ${Math.round(c.b*255)}, ${s.opacity ?? c.a});\n`;
      }
    }
  }
  
  css += `}\n\n`;
  
  let indent = '  '.repeat(depth);
  if (node.type === 'TEXT') {
    jsx += `${indent}<div className="${id}" dangerouslySetInnerHTML={{__html: \`${content}\`}} />\n`;
  } else {
    jsx += `${indent}<div className="${id}">\n`;
    if (node.children) {
      node.children.forEach(c => processNode(c, box, depth + 1));
    }
    jsx += `${indent}</div>\n`;
  }
}

mainNode.children.forEach(c => processNode(c, mainNode.absoluteBoundingBox));

jsx += `    </div>\n  );\n}\n`;

fs.writeFileSync('src/FigmaMain.jsx', jsx);
fs.writeFileSync('src/FigmaMain.css', css);
console.log('Generated src/FigmaMain.jsx and src/FigmaMain.css');
