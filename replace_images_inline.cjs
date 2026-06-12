const fs = require('fs');
let code = fs.readFileSync('src/FigmaInline.jsx', 'utf8');

code = code.replace(/"https:\/\/placehold\.co\/328x328"/g, '"/robot.png"');
code = code.replace(/"https:\/\/placehold\.co\/442x520"/g, '"/cnc_machine.png"');
code = code.replace(/"https:\/\/placehold\.co\/155x280"/g, '"/small_part.png"');

fs.writeFileSync('src/FigmaInline.jsx', code);
console.log('Replaced images in FigmaInline.jsx');
