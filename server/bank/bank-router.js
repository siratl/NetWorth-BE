const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  const bank = [
    { id: 1, source: 'Salary', amount: 600, date: '2020-04-3' },
    { id: 2, source: 'Freelance', amount: 1400, date: '2020-04-10' },
    { id: 3, source: 'Gift', amount: 70, date: '2020-04-13' },
  ];

  res.status(200).json(bank);
});

module.exports = router;
