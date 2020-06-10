// import express
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

// ---------------------> Routers <---------------------
const budgetRouter = require('../budget/budget-router.js');
const billsRouter = require('../bills/bills-router.js');
const bankRouter = require('../bank/bank-router.js');
const investmentsRouter = require('../invest/investments-router.js');

// create server
const server = express();
server.use(cors());

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).send('<h1>Hello world!</h1>');
});

// -------------------> Routes <------------------------
server.use('/api/budget', budgetRouter);
server.use('/api/bills', billsRouter);
server.use('/api/bank', bankRouter);
server.use('/api/investments', investmentsRouter);

server.post('/hobbits', (req, res) => {
  const hobbit = req.body;
  hobbit.id = nextId++;

  hobbits.push(hobbit);
  res.status(201).send(hobbits);
});

server.put('/hobbits/:id', (req, res) => {
  const hobbit = hobbits.find((h) => h.id == req.params.id);

  if (!hobbit) {
    res.status(404).json({ message: 'Hobbit does not exist' });
  } else {
    // modify the existing hobbit
    Object.assign(hobbit, req.body);

    res.status(200).json(hobbit);
  }
});

server.delete('/hobbits/:id', (req, res) => {
  const id = req.params.id;
  // or we could destructure it like so: const { id } = req.params;
  res.status(200).json({
    url: `/hobbits/${id}`,
    operation: `DELETE for hobbit with id ${id}`,
  });
});

module.exports = server;
