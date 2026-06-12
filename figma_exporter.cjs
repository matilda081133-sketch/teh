const fs = require('fs');
const path = require('path');

const FIGMA_JSON = 'figma.json';
const OUTPUT_DIR = path.join(__dirname, 'src', 'pages');

if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

const data = JSON.parse(fs.readFileSync(FIGMA_JSON, 'utf8'));

let pages = [];
if (data.document && data.document.children) {
  data.document.children.forEach(canvas => {
    if (canvas.children) {
      canvas.children.forEach(node => {
        if (node.type === 'FRAME' || node.type === 'COMPONENT') {
          pages.push(node);
        }
      });
    }
  });
}

console.log('Found ' + pages.length + ' pages/frames in Figma.');

let imageNodes = {};

function hasImageFill(node) {
  if (!node.fills) return false;
  return node.fills.some(f => f.type === 'IMAGE');
}

function traverseForImages(node) {
  if (hasImageFill(node)) {
    imageNodes[node.id] = { ext: 'png' };
  }
  if (node.children) {
    node.children.forEach(traverseForImages);
  }
}

pages.forEach(traverseForImages);

function rgbaToHex(color) {
  if (!color) return 'transparent';
  const r = Math.round(color.r * 255);
  const g = Math.round(color.g * 255);
  const b = Math.round(color.b * 255);
  const a = color.a !== undefined ? color.a : 1;
  return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ')';
}

function getStyles(node, parentBox, parentLayoutMode) {
  let style = {};

  if (node.layoutMode === 'HORIZONTAL' || node.layoutMode === 'VERTICAL') {
    style.display = 'flex';
    style.flexDirection = node.layoutMode === 'HORIZONTAL' ? 'row' : 'column';
    style.alignItems = node.counterAxisAlignItems === 'MIN' ? 'flex-start' : node.counterAxisAlignItems === 'MAX' ? 'flex-end' : 'center';
    style.justifyContent = node.primaryAxisAlignItems === 'MIN' ? 'flex-start' : node.primaryAxisAlignItems === 'MAX' ? 'flex-end' : node.primaryAxisAlignItems === 'SPACE_BETWEEN' ? 'space-between' : 'center';
    if (node.itemSpacing) style.gap = node.itemSpacing + 'px';
    if (node.paddingLeft) style.paddingLeft = node.paddingLeft + 'px';
    if (node.paddingRight) style.paddingRight = node.paddingRight + 'px';
    if (node.paddingTop) style.paddingTop = node.paddingTop + 'px';
    if (node.paddingBottom) style.paddingBottom = node.paddingBottom + 'px';
  }

  const isFlexChild = parentLayoutMode === 'HORIZONTAL' || parentLayoutMode === 'VERTICAL';

  if (!isFlexChild) {
    style.position = 'absolute';
    if (node.absoluteBoundingBox && node.absoluteBoundingBox.x !== undefined) {
      const px = parentBox ? parentBox.x : 0;
      const py = parentBox ? parentBox.y : 0;
      style.left = (node.absoluteBoundingBox.x - px) + 'px';
      style.top = (node.absoluteBoundingBox.y - py) + 'px';
      style.width = node.absoluteBoundingBox.width + 'px';
      style.height = node.absoluteBoundingBox.height + 'px';
    }
  } else {
    if (node.absoluteBoundingBox) {
      if (parentLayoutMode === 'VERTICAL') {
        if (node.layoutAlign !== 'STRETCH') style.width = node.absoluteBoundingBox.width + 'px';
        if (node.layoutGrow !== 1) style.height = node.absoluteBoundingBox.height + 'px';
      } else if (parentLayoutMode === 'HORIZONTAL') {
        if (node.layoutGrow !== 1) style.width = node.absoluteBoundingBox.width + 'px';
        if (node.layoutAlign !== 'STRETCH') style.height = node.absoluteBoundingBox.height + 'px';
      }
    }
  }

  if (node.layoutAlign === 'STRETCH') style.alignSelf = 'stretch';
  if (node.layoutGrow === 1) style.flexGrow = 1;

  if (node.fills && node.fills.length > 0) {
    const solidFill = node.fills.find(f => f.type === 'SOLID' && f.visible !== false);
    if (solidFill) {
      if (node.type === 'TEXT') style.color = rgbaToHex(solidFill.color);
      else style.backgroundColor = rgbaToHex(solidFill.color);
    }
  }

  if (node.strokes && node.strokes.length > 0) {
    const stroke = node.strokes[0];
    if (stroke.type === 'SOLID' && stroke.visible !== false) {
      style.border = (node.strokeWeight || 1) + 'px solid ' + rgbaToHex(stroke.color);
    }
  }
  if (node.cornerRadius) style.borderRadius = node.cornerRadius + 'px';

  if (node.type === 'TEXT' && node.style) {
    style.fontFamily = "'" + node.style.fontFamily + "', sans-serif";
    style.fontSize = node.style.fontSize + 'px';
    style.fontWeight = node.style.fontWeight;
    if (node.style.lineHeightPx) style.lineHeight = node.style.lineHeightPx + 'px';
    if (node.style.textAlignHorizontal) {
      style.textAlign = node.style.textAlignHorizontal.toLowerCase();
    }
  }

  return style;
}

function generateJSX(node, parentBox = null, isRoot = false, parentLayoutMode = null) {
  if (imageNodes[node.id]) {
    const ext = imageNodes[node.id].ext;
    const safeId = node.id.replace(/:/g, '_');
    const styleStr = JSON.stringify(getStyles(node, parentBox, parentLayoutMode)).slice(1, -1);
    return '<img src="/images/' + safeId + '.' + ext + '" alt="img" style={{' + styleStr + '}} />';
  }

  if (node.type === 'TEXT') {
    const styles = getStyles(node, parentBox, parentLayoutMode);
    const styleStr = JSON.stringify(styles).slice(1, -1);
    const textContent = node.characters ? node.characters.replace(/</g, '&lt;').replace(/>/g, '&gt;') : '';
    return '<div style={{' + styleStr + '}}>' + textContent + '</div>';
  }

  const styles = getStyles(node, parentBox, parentLayoutMode);
  if (isRoot && !node.layoutMode) {
    styles.position = 'relative';
    styles.left = '0px';
    styles.top = '0px';
    styles.overflow = 'hidden';
  }

  let childrenJSX = '';
  if (node.children) {
    const myBox = node.absoluteBoundingBox || parentBox;
    childrenJSX = node.children.map(c => generateJSX(c, myBox, false, node.layoutMode)).join('\n');
  }

  const styleStr = JSON.stringify(styles).slice(1, -1);
  return '<div style={{' + styleStr + '}}>\n' + childrenJSX + '\n</div>';
}

pages.forEach(page => {
  let safeName = page.name.replace(/[^a-zA-Z0-9]/g, '');
  if (!safeName) return;
  if (/^[0-9]/.test(safeName)) safeName = 'Page' + safeName;
  const jsx = generateJSX(page, null, true);
  
  const componentCode = "import React from 'react';\n\nexport default function " + safeName + "() {\n  return (\n    " + jsx + "\n  );\n}\n";
  fs.writeFileSync(path.join(OUTPUT_DIR, safeName + '.jsx'), componentCode);
});
console.log('Generated JSX components.');

let uniqueNames = new Set();
let uniquePages = [];
pages.forEach(p => {
  let safeName = p.name.replace(/[^a-zA-Z0-9]/g, '');
  if (!safeName) return;
  if (/^[0-9]/.test(safeName)) safeName = 'Page' + safeName;
  if (!uniqueNames.has(safeName)) {
    uniqueNames.add(safeName);
    uniquePages.push({ page: p, safeName });
  }
});

let appImports = uniquePages.map(up => {
  return "import " + up.safeName + " from './pages/" + up.safeName + "';";
}).join('\n');

let appRoutes = uniquePages.map(up => {
  return '        <Route path="/' + up.safeName.toLowerCase() + '" element={<' + up.safeName + ' />} />';
}).join('\n');

let mainComponentName = uniquePages[0].safeName;

let appCode = "import React from 'react';\n" +
"import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';\n" +
appImports + "\n\n" +
"function App() {\n" +
"  return (\n" +
"    <Router>\n" +
"      <div style={{ display: 'flex', gap: '10px', padding: '10px', background: '#333', color: 'white', flexWrap: 'wrap' }}>\n" +
"        <strong>Navigation:</strong>\n";

uniquePages.forEach(up => {
  appCode += '        <Link to="/' + up.safeName.toLowerCase() + '" style={{ color: \'#00f\' }}>' + up.page.name + '</Link>\n';
});

appCode += "      </div>\n" +
"      <Routes>\n" +
"        <Route path=\"/\" element={<" + mainComponentName + " />} />\n" +
appRoutes + "\n" +
"      </Routes>\n" +
"    </Router>\n" +
"  );\n" +
"}\n\nexport default App;\n";

fs.writeFileSync(path.join(__dirname, 'src', 'App.jsx'), appCode);
console.log('Generated App.jsx with routing.');
console.log('Figma to React conversion complete!');
