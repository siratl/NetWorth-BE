// import express
const express = require('express');

// create server
const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.send('Hello world!');
});

module.exports = server;
