// import express
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const session = require("express-session");
const KnexStore = require("connect-session-knex")(session);

// ---------------------> Routers <---------------------
const restricted = require("../auth/restricted-middleware.js");
const authRouter = require("../auth/authRouter.js");
const budgetRouter = require("../budget/budget-router.js");
const billsRouter = require("../bills/bills-router.js");
const usersRouter = require("../users/users-router.js");
const bankRouter = require("../bank/bank-router.js");
const investmentsRouter = require("../invest/investments-router.js");
const knex = require("../data/db-config.js");

const sessionConfig = {
  name: "monster",
  secret: process.env.COOKIE_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 60 * 60,
    secure: false, // process.env.SECURE,
    httpOnly: true,
  },
  store: new KnexStore({
    knex,
    tablename: "session",
    createtable: true,
    sidfieldname: "sid",
    clearInterval: 1000 * 60 * 65,
  }),
};

// create server
const server = express();
server.use(cors());
server.use(helmet());
server.use(express.json());
server.use(session(sessionConfig));

// ----------------------------- SERVER ROOT
server.get("/", (req, res) => {
  res.status(200).send("<h1>Net_Worth App</h1>");
});

// -------------------> Routes <------------------------
server.use("/api/auth", authRouter);
server.use("/api/users", restricted, usersRouter);
server.use("/api/budget", restricted, budgetRouter);
server.use("/api/bills", restricted, billsRouter);
server.use("/api/bank", restricted, bankRouter);
server.use("/api/investments", restricted, investmentsRouter);

module.exports = server;
