const express = require("express");
const bcrypt = require("bcryptjs");
const db = require("../../data/model/userModel");

const router = express.Router();

router.post("/", (req, res) => {
  let { username, password } = req.body;

  db.findUserByName(username)
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        req.session.username = username;
        res.status(200).json({ message: `Welcome ${user.username}!. You are now logged in.` });
      } else {
        res.status(401).json({ message: "You shall not pass!" });
      }
    })
    .catch(err => {
      res.status(500).json(error);
    });
});

module.exports = router;
