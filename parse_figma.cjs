const fs = require('fs');

const data = JSON.parse(fs.readFileSync('figma.json', 'utf8'));

function traverse(node, path) {
  const currentPath = path ? `${path} > ${node.name}` : node.name;
  
  if (node.name) {
    const nameLower = node.name.toLowerCase();
    if (nameLower.includes('logo') || nameLower.includes('tex') || 
        nameLower.includes('robot') || nameLower.includes('робот') ||
        nameLower.includes('манипулятор') || nameLower.includes('станок') ||
        nameLower.includes('cnc') || nameLower.includes('глобус') ||
        nameLower.includes('globe') || nameLower.includes('t_x')) {
      console.log(`[${node.type}] ID: ${node.id} | Name: ${node.name} | Path: ${currentPath}`);
    }
  }

  if (node.children) {
    for (const child of node.children) {
      traverse(child, currentPath);
    }
  }
}

traverse(data.document, '');
