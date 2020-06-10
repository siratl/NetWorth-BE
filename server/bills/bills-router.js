const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  const bills = [
    {
      id: 1,
      name: 'Car',
      amount: 600,
      repeat: true,
      paid: false,
      message: 'this is a message',
    },
    {
      id: 2,
      name: 'Rent',
      amount: 1400,
      repeat: true,
      paid: false,
      message: 'this is a message',
    },
    {
      id: 3,
      name: 'Internet',
      amount: 70,
      repeat: true,
      paid: false,
      message: 'this is a message',
    },
  ];

  res.status(200).json(bills);
});

module.exports = router;
