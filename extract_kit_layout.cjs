// Extract precise layout data from Figma K1T page
const data = require('./figma_kit.json');
const node = data.nodes['2029:1163'].document;
const frameX = node.absoluteBoundingBox.x; // 26147
const frameY = node.absoluteBoundingBox.y; // -2022
const W = node.absoluteBoundingBox.width;  // 1920
const H = node.absoluteBoundingBox.height; // 5075

console.log(`Frame: ${W}x${H}`);
console.log(`Origin: (${frameX}, ${frameY})`);
console.log('');

function rel(absBox) {
  if (!absBox) return null;
  return {
    x: Math.round(absBox.x - frameX),
    y: Math.round(absBox.y - frameY),
    w: Math.round(absBox.width),
    h: Math.round(absBox.height),
    xVw: ((absBox.x - frameX) / 19.2).toFixed(4),
    yVw: ((absBox.y - frameY) / 19.2).toFixed(4),
    wVw: (absBox.width / 19.2).toFixed(4),
    hVw: (absBox.height / 19.2).toFixed(4),
  };
}

function extract(n, indent) {
  indent = indent || '';
  if (!n.absoluteBoundingBox) return;
  const r = rel(n.absoluteBoundingBox);
  const chars = n.characters ? JSON.stringify(n.characters.substring(0, 50)) : '';
  const fs = n.style ? 'fs:' + n.style.fontSize : '';
  const fw = n.style ? 'fw:' + n.style.fontWeight : '';
  const imgFill = (n.fills && n.fills.length && n.fills[0].type === 'IMAGE') ? 'IMG' : '';
  const bg = (n.fills && n.fills.length && n.fills[0].type === 'SOLID') ? 'bg' : '';
  const br = n.cornerRadius ? 'br:' + n.cornerRadius : '';
  const layout = n.layoutMode || '';
  const gap = n.itemSpacing ? 'gap:' + n.itemSpacing : '';
  const pad = n.paddingLeft ? 'p:' + n.paddingLeft + ',' + n.paddingTop + ',' + n.paddingRight + ',' + n.paddingBottom : '';
  const op = (n.opacity !== undefined && n.opacity !== 1) ? 'op:' + n.opacity.toFixed(2) : '';

  // Skip footer children (y > 4200) and header children (y < 100)
  if (r.y > 4200 && indent.length > 2) return;

  const info = [n.type, n.name, `@(${r.x},${r.y}) ${r.w}x${r.h}`, `vw:(${r.xVw},${r.yVw}) ${r.wVw}x${r.hVw}`, fs, fw, layout, gap, pad, br, op, imgFill, bg, chars].filter(Boolean).join(' | ');
  console.log(indent + info);

  if (n.children && indent.length < 6) {
    n.children.forEach(function(c) { extract(c, indent + '  '); });
  }
}

// Only extract main content nodes (skip Group 146 grid lines, header, footer)
node.children.forEach(function(c) {
  const r = rel(c.absoluteBoundingBox);
  if (!r) return;
  // Skip grid lines group and header group
  if (c.name === 'Group 146') { console.log('--- GRID LINES (skipped) ---'); return; }
  if (c.name === 'Group 172') { console.log('--- HEADER (skipped) ---'); return; }
  if (c.name === 'Footer') { console.log('--- FOOTER (skipped) ---'); return; }
  if (c.name === 'Frame 54') return; // See Stretch button
  extract(c, '');
});
