const bcrypt = require("bcryptjs");

const router = require("express").Router();

const Users = require("../users/users-model.js");

// --------------------------> Create A USER
router.post("/register", (req, res) => {
  const userInfo = req.body;

  const ROUNDS = process.env.HASH_ROUNDS || 8;
  const hash = bcrypt.hashSync(userInfo.password, ROUNDS);

  userInfo.password = hash;

  Users.add(userInfo)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.send(err);
    });
});

// --------------------------> login A USER
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  Users.findBy({ username })
    .then(([user]) => {
      if (user && bcrypt.compareSync(password, user.password)) {
        req.session.user = {
          id: user.id,
          username: user.username,
        };

        res
          .status(200)
          .json({ message: `Welcome ${user.first_name} ${user.last_name}!` });
      } else {
        res.status(401).json({ message: `Invalid credentials provided` });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: `Error finding user` });
    });
});

router.get("/logout", (req, res) => {
  if (req.session) {
    req.session.destroy((err) => {
      if (err) {
        res.send("error logging out");
      } else {
        res.status(200).json({ message: "Logged out successfully!" });
      }
    });
  }
});

module.exports = router;
