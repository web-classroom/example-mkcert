const https = require('https');
const fs = require('fs');
const hostname = '127.0.0.1';
const port = 3443;

const server = https.createServer({
  key: fs.readFileSync("./127.0.0.1-key.pem"),
  cert: fs.readFileSync("./127.0.0.1.pem"),
}, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello HTTPS!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at https://${hostname}:${port}/`);
});