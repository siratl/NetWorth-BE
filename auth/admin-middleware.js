require("dotenv").config();

module.exports = (req, res, next) => {
  if (
    req.session &&
    req.session.user &&
    req.session.user.email === process.env.ADMIN_CRED
  ) {
    next();
  } else {
    res
      .status(401)
      .json({ message: "RESTRICTED! Admin credentials REQUIRED!" });
  }
};
