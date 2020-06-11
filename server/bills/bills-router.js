const express = require("express");

const db = require("../data/db-config.js");
const Bills = require("../bills/bills-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  Bills.find()
    .then((bills) => {
      res.status(200).json(bills);
    })
    .catch((err) => {
      res.status(500).json({ errMessage: "Failed to get bills!" });
    });
});

// ------------------------> GET DATA FROM DB
router.get("/:id", (req, res) => {
  const { id } = req.params;

  Bills.findById(id)
    .then((bills) => {
      if (bills) {
        res.status(200).json(bills);
      } else {
        res
          .status(404)
          .json({ errMessage: `Could not find bill with id:${id}` });
      }
    })
    .catch((err) => {
      res.status(500).json({ errMessage: "Failed to get bills!" });
    });
});

// ------------------------> ADD DATA TO DB
router.post("/", (req, res) => {
  const { bill } = req.body;

  Bills.add(bill)
    .then((ids) => {
      res.status(201).json({ created: ids[0] });
    })
    .catch((err) => {
      res.status(500).json({ errMessage: "Failed to create new bill!" });
    });
});

// ------------------------> UPDATE DATA IN DB
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Bills.update(id, changes)
    .then((bill) => {
      if (bill) {
        res.status(200).json(bill);
      } else {
        res
          .status(404)
          .json({ errMessage: `Could not find bill with given id:${id}` });
      }
    })
    .catch((err) => {
      res.status(500).json({ errMessage: "Failed to update bills!" });
    });
});

module.exports = router;
