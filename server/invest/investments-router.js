const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  const investments = [
    { id: 1, type: 'Stocks', amount: 3600, date: '20-04-3' },
    { id: 2, type: 'Bonds', amount: 1400, date: '20-04-10' },
    { id: 3, type: 'Crypto', amount: 4570, date: '20-04-13' },
  ];

  res.status(200).json(investments);
});

module.exports = router;
