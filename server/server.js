// const http = require('http');
const express = require('express');

const port = 3333;

const server = express();

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

server.get('/', (req, res) => {
  res.send('Hello world from Eli!');
});

server.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
