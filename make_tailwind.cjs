const fs = require('fs');

const rawCode = fs.readFileSync('design.txt', 'utf8');

// The raw code is just a <div> tree. We need to wrap it in a React component.
const componentCode = `import React from 'react';

export default function FigmaTailwind() {
  return (
    ${rawCode}
  );
}
`;

fs.writeFileSync('src/FigmaTailwind.jsx', componentCode);
console.log('Created src/FigmaTailwind.jsx');
