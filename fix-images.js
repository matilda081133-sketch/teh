const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.jsx')) results.push(file);
    }
  });
  return results;
}

const files = walk('./src');
files.forEach(f => {
  let c = fs.readFileSync(f, 'utf8');
  let nc = c.replace(/src="\//g, 'src="./').replace(/img: '\//g, 'img: \'./');
  if (c !== nc) {
    fs.writeFileSync(f, nc);
    console.log('Updated ' + f);
  }
});
