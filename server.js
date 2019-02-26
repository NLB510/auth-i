const express = require("express");
const helmet = require("helmet");
const session = require('express-session');
// const KnexSessionStore

const { authenticate } = require("./Authenticate/Authenticate");

// API ROUTERS
const loginRouter = require("./api/loginRouter");
const registerRouter = require("./api/registerRouter");
const usersRouter = require("./api/usersRouter");

const server = express();


const sessionConfig = {
  name: 'anon',
  secret: "bay area", 
  cookie: {
    maxAge: 100 * 60 * 60, 
    secure: false
  },
  httpOnly: true,
  resave: false, 
  saveUninitialized: false,
}


server.use(express.json());
server.use(helmet());
server.use(session(sessionConfig))



server.use("/api/register", registerRouter);
server.use("/api/login", loginRouter);
server.use("/api/users", authenticate, usersRouter);

server.get("/", (req, res) => {
  res.send(`<h1>Hello from the API</h1>`);
});

module.exports = server;
