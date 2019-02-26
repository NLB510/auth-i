const express = require("express");
const helmet = require("helmet");
const session = require("express-session");
const KnexSessionStore = require("connect-session-knex")(session);

const db = require("./data/dbConfig");
const { authenticate } = require("./Authenticate/Authenticate");

// API ROUTERS
const registerRouter = require("./api/Auth/registerRouter");
const loginRouter = require("./api/Auth/loginRouter");
const logoutRouter = require("./api/Auth/logoutRouter");
const usersRouter = require("./api/usersRouter");

const server = express();

const sessionConfig = {
  name: "anon",
  secret: "bay area",
  cookie: {
    maxAge: 100 * 60 * 60,
    secure: false
  },
  httpOnly: true,
  resave: false,
  saveUninitialized: false,

  store: new KnexSessionStore({
    knex: db,
    tablename: "sessions",
    sidfieldname: "sid",
    createtable: true,
    clearInterval: 1000 * 60 * 60
  })
};

server.use(express.json());
server.use(helmet());
server.use(session(sessionConfig));

server.use("/api/register", registerRouter);
server.use("/api/login", loginRouter);
server.use("/api/logout", logoutRouter);
server.use("/api/users", authenticate, usersRouter);

server.get("/", (req, res) => {
  res.send(`<h1>Hello from the API</h1>`);
});

module.exports = server;
