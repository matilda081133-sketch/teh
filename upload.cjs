const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`
      <html>
        <head><title>Вставка кода</title></head>
        <body style="font-family: sans-serif; padding: 20px; background: #f0f0f0;">
          <h2>Вставьте ваш код из Figma сюда:</h2>
          <form method="POST" action="/save">
            <textarea name="code" style="width: 100%; height: 500px; padding: 10px;"></textarea><br/><br/>
            <button type="submit" style="padding: 15px 30px; font-size: 18px; background: #007bff; color: white; border: none; cursor: pointer;">Сохранить код</button>
          </form>
        </body>
      </html>
    `);
  } else if (req.method === 'POST' && req.url === '/save') {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', () => {
      const code = decodeURIComponent(body.replace('code=', '').replace(/\+/g, ' '));
      fs.writeFileSync('design.jsx', code);
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end('<h2>Код успешно сохранен! Можете закрыть эту вкладку и вернуться в чат.</h2>');
      console.log('CODE_SAVED');
    });
  }
});

server.listen(4000, () => {
  console.log('Upload server running at http://127.0.0.1:4000');
});
