const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  const bills = [
    {
      id: 1,
      name: "Car",
      amount: 650,
      date: "2020-04-05",
      repeat: true,
      paid: false,
      message: "this is a message",
    },
    {
      id: 2,
      name: "Rent",
      amount: 1400,
      date: "2020-04-13",
      repeat: true,
      paid: false,
      message: "this is a message",
    },
    {
      id: 3,
      name: "Internet",
      amount: 170,
      date: "2020-04-18",
      repeat: true,
      paid: false,
      message: "this is a message",
    },
  ];

  res.status(200).json(bills);
});

module.exports = router;
