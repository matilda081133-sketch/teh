const fs = require('fs');
let html = '<html><body style="display:flex; flex-wrap:wrap; gap:20px; background:#fff;">';
for(let i=0; i<=153; i++) {
  html += `<div>
    <img src="/img_${i}.png" style="max-width:200px;max-height:200px;display:block;"/>
    <p style="text-align:center;color:#000;font-size:20px;font-weight:bold;">img_${i}.png</p>
  </div>`;
}
html += '</body></html>';
fs.writeFileSync('public/gallery.html', html);
