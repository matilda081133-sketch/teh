const data = require('./figma_kit.json');
const node = data.nodes['2029:1163'].document;

function printTree(n, indent) {
  indent = indent || '';
  const box = n.absoluteBoundingBox;
  const size = box ? box.width + 'x' + box.height + ' @(' + box.x + ',' + box.y + ')' : '';
  const chars = n.characters ? JSON.stringify(n.characters.substring(0, 100)) : '';
  const fs = (n.style && n.style.fontSize) ? ' fs:' + n.style.fontSize : '';
  const fw = (n.style && n.style.fontWeight) ? ' fw:' + n.style.fontWeight : '';
  const lm = n.layoutMode ? ' layout:' + n.layoutMode : '';
  const gap = n.itemSpacing ? ' gap:' + n.itemSpacing : '';
  const pad = n.paddingLeft ? ' pad:' + n.paddingLeft + ',' + n.paddingTop + ',' + n.paddingRight + ',' + n.paddingBottom : '';
  const br = n.cornerRadius ? ' br:' + n.cornerRadius : '';
  const opacity = (n.opacity !== undefined && n.opacity !== 1) ? ' opacity:' + n.opacity : '';
  const fills = (n.fills && n.fills.length && n.fills[0].type === 'SOLID') ? ' bg:rgba(' + Math.round(n.fills[0].color.r*255) + ',' + Math.round(n.fills[0].color.g*255) + ',' + Math.round(n.fills[0].color.b*255) + ')' : '';
  const imgFill = (n.fills && n.fills.length && n.fills[0].type === 'IMAGE') ? ' IMG' : '';
  const stroke = (n.strokes && n.strokes.length) ? ' stroke' : '';
  
  console.log(indent + n.type + ' [' + n.name + '] ' + size + fs + fw + lm + gap + pad + br + opacity + fills + imgFill + stroke + ' ' + chars);
  
  if (n.children) {
    n.children.forEach(function(c) { printTree(c, indent + '  '); });
  }
}

printTree(node);
