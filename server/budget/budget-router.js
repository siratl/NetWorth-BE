const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  const budget = [
    { id: 1, name: 'Grocery', amount: 450, message: 'this is a message' },
    { id: 2, name: 'Cell', amount: 120, message: 'this is a message' },
    { id: 3, name: 'Internet', amount: 90, message: 'this is a message' },
  ];

  res.status(200).json(budget);
});

module.exports = router;
