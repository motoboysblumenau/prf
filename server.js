const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 8000;
const rootDir = process.cwd();
const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.json': 'application/json',
  '.txt': 'text/plain'
};

const server = http.createServer((req, res) => {
  let filePath = path.join(rootDir, req.url.split('?')[0].replace(/\//g, path.sep));
  if (req.url === '/' || req.url === '') {
    filePath = path.join(rootDir, 'index.html');
  }

  if (!filePath.startsWith(rootDir)) {
    res.writeHead(403);
    return res.end('403 Forbidden');
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404);
      return res.end('404 Not Found');
    }

    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
    fs.createReadStream(filePath).pipe(res);
  });
});

server.listen(port, '0.0.0.0', () => {
  console.log(`Servidor HTTP iniciado em http://0.0.0.0:${port}`);
});
