const fs = require('fs');
let code = fs.readFileSync('src/FigmaTailwind.jsx', 'utf8');

code = code.replace('"https://placehold.co/328x328"', '"/robot.png"');
code = code.replace('"https://placehold.co/442x520"', '"/cnc_machine.png"');
code = code.replace('"https://placehold.co/155x280"', '"/small_part.png"');

fs.writeFileSync('src/FigmaTailwind.jsx', code);
console.log('Replaced images');
