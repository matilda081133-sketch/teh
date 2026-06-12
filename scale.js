const fs = require('fs');
const path = require('path');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace px values with vw. 100vw = 1920px, so 1vw = 19.2px
  // Ignore 1px (often used for borders)
  const regex = /([\d.]+)px/g;
  content = content.replace(regex, (match, p1) => {
    const val = parseFloat(p1);
    if (val === 1) return '1px'; // Keep 1px borders
    if (val === 0) return '0px';
    const vw = (val / 19.2).toFixed(4);
    return `${vw}vw`;
  });
  
  fs.writeFileSync(filePath, content, 'utf8');
}

function walk(dir) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (fullPath.endsWith('.css')) {
      processFile(fullPath);
    }
  });
}

walk('src');
console.log('Scaling complete!');
