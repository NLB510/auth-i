const express = require('express');
const bcrypt = require('bcryptjs')


const db = require('../data/model/userModel')

const router = express.Router();



router.post('/', (req, res) => {
  let user = req.body

  const hash = bcrypt.hashSync(user.password, 12);

  user.password = hash;


  if (!user.username || !user.password) {
    return req.status(400).json({
      message: "Please include a username and password"
    })
  } else {
    db.addUser(user)
    .then(user => {
      res.status(201).json({
        message: "User registered successfully",
        user
      })
    })
    .catch(err => {
      res.status(500).json({
        error: "There was an error saving a user to the database"
      })
    })

  }

  db.addUser()
})

module.exports = router;