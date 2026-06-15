const fs = require('fs');
const path = require('path');

let totalConverted = 0;

function processFile(filePath) {
  const original = fs.readFileSync(filePath, 'utf8');
  let fileConversions = 0;
  
  // Process line by line to skip @media condition lines
  const lines = original.split('\n');
  const processed = lines.map(line => {
    // Skip @media query lines — preserve breakpoint px values
    if (line.trim().startsWith('@media')) return line;
    // Skip @keyframes lines  
    if (line.trim().startsWith('@keyframes')) return line;
    
    // Replace px values with vw (1920px base => 1vw = 19.2px)
    return line.replace(/(-?\d*\.?\d+)px/g, (match, p1) => {
      const val = parseFloat(p1);
      // Keep 0px, 1px, -1px (borders, hairlines)
      if (Math.abs(val) <= 1) return match;
      const vw = (val / 19.2).toFixed(4);
      fileConversions++;
      return `${vw}vw`;
    });
  });
  
  if (fileConversions > 0) {
    fs.writeFileSync(filePath, processed.join('\n'), 'utf8');
    console.log(`  ${path.relative('src', filePath)}: ${fileConversions} conversions`);
    totalConverted += fileConversions;
  }
}

function walk(dir) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (fullPath.endsWith('.module.css')) {
      processFile(fullPath);
    }
  });
}

console.log('Converting remaining px values to vw (base: 1920px)...\n');
walk('src');
console.log(`\nDone! Total conversions: ${totalConverted}`);
