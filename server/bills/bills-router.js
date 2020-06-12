const express = require("express");

const Bills = require("../bills/bills-model.js");
const { findById } = require("../bills/bills-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  Bills.find()
    .then((bills) => {
      res.status(200).json(bills);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get bills list!" });
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
        res.status(404).json({ message: `Could not find bill with id:${id}` });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get bills!" });
    });
});

// ------------------------> ADD DATA TO DB
router.post("/", (req, res) => {
  const bill = req.body;
  console.log(bill);

  Bills.add(bill)
    .then((ids) => {
      console.log(ids);
      res.status(201).json({ created: ids[0] });
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to create new bill!" });
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

// ------------------------> DELETE DATA IN DB
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  Bills.remove(id)

    .then((count) => {
      if (!count) {
        return res
          .status(404)
          .json({ message: `Bill with id: ${id} does not Exist!` });
      } else {
        console.log(count);
        res.status(200).json({ message: `Bill was deleted successfully.` });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: `Fatal error deleting post with id: ${id}` });
    });
});

module.exports = router;
