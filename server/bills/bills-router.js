const express = require("express");

const Bills = require("../bills/bills-model.js");
const Users = require("../users/users-model.js");

const admin = require("../auth/admin-middleware.js");

const router = express.Router();

router.get("/", admin, (req, res) => {
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
        res.status(404).json({ message: `Could not find bill with id: ${id}` });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get bills!" });
    });
});

//******************** GET USER BILLS ******************/
router.get("/user/:id", (req, res) => {
  const { id } = req.params;

  console.log(req.session.user);
  console.log({ current_user: id });
  Users.findById(id)
    .then((user) => {
      console.log("user list", user);
      if (!user) {
        res.status(404).json({
          message: `The user with the specified id: ${id} does not exist.`,
        });
      } else if (req.session.user.id != id) {
        res
          .status(401)
          .json({ message: `Not Authorized to access this resource!` });
      } else {
        Bills.findBillsByUser(id).then((bills) => {
          user.bills = bills;
          res.status(200).json(user);
        });
      }
    })

    .catch(() => {
      res.status(500).json({
        message: `The specified user ${id}'s bills(s) could not be retrieved.`,
      });
    });
});

// ------------------------> ADD DATA TO DB
router.post("/", (req, res) => {
  const bill = req.body;
  bill.user_id = req.session.user.id;
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
      if (!bill) {
        res
          .status(404)
          .json({ errMessage: `Could not find bill with given id: ${id}` });
      } else if (req.session.user.id != id) {
        res
          .status(401)
          .json({ message: `Not Authorized to access this resource!` });
      } else {
        res.status(200).json(bill);
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
      } else if (req.session.user.id != id) {
        res
          .status(401)
          .json({ message: `Not Authorized to access this resource!` });
      } else {
        console.log(count);
        res
          .status(200)
          .json({ message: `Bill with id: ${id} was deleted successfully.` });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: `Fatal error deleting post with id: ${id}` });
    });
});

module.exports = router;
