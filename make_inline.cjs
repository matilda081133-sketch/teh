const fs = require('fs');
let code = fs.readFileSync('design.txt', 'utf8');

// The code starts with `<div...` and ends with `</div>`. Wrap it.
const component = `import React from 'react';

export default function FigmaInline() {
  return (
    ${code}
  );
}
`;

fs.writeFileSync('src/FigmaInline.jsx', component);
console.log('Created src/FigmaInline.jsx');
