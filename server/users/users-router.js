const express = require("express");

const Users = require("../users/users-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  Users.find()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get users list!" });
    });
});

// ------------------------> GET DATA FROM DB
router.get("/:id", (req, res) => {
  const { id } = req.params;

  Users.findById(id)
    .then((users) => {
      if (users) {
        res.status(200).json(users);
      } else {
        res.status(404).json({ message: `Could not find user with id: ${id}` });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get users!" });
    });
});

// // ------------------------> ADD DATA TO DB
// router.post("/", (req, res) => {
//   const user = req.body;
//   console.log(user);

//   users.add(user)
//     .then((ids) => {
//       console.log(ids);
//       res.status(201).json({ created: ids[0] });
//     })
//     .catch((err) => {
//       res.status(500).json({ message: "Failed to create new user!" });
//     });
// });

// // ------------------------> UPDATE DATA IN DB
// router.put("/:id", (req, res) => {
//   const { id } = req.params;
//   const changes = req.body;

//   users.update(id, changes)
//     .then((user) => {
//       if (user) {
//         res.status(200).json(user);
//       } else {
//         res
//           .status(404)
//           .json({ errMessage: `Could not find user with given id:${id}` });
//       }
//     })
//     .catch((err) => {
//       res.status(500).json({ errMessage: "Failed to update users!" });
//     });
// });

// // ------------------------> DELETE DATA IN DB
// router.delete("/:id", async (req, res) => {
//   const { id } = req.params;

//   users.remove(id)

//     .then((count) => {
//       if (!count) {
//         return res
//           .status(404)
//           .json({ message: `user with id: ${id} does not Exist!` });
//       } else {
//         console.log(count);
//         res
//           .status(200)
//           .json({ message: `user with id: ${id} was deleted successfully.` });
//       }
//     })
//     .catch((err) => {
//       res
//         .status(500)
//         .json({ message: `Fatal error deleting post with id: ${id}` });
//     });
// });

module.exports = router;
