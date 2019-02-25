const express = require('express');
const bcrypt = require('bcryptjs')
const db = require('../data/model/userModel')
const {authenticate} = require('../Authenticate/Authenticate')

const router = express.Router();




router.get('/', (req, res) => {
  db.getUsers()
  .then(users => {
    res.status(200).json(users)
  })
  .catch(err => {
    res.status(500).json({
      error: "There was an error retrieving the user data"
    })
  })
})






module.exports = router;