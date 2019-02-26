const db = require('../data/model/userModel')
const bcrypt = require('bcryptjs')

module.exports = {
  authenticate
};


function authenticate(req, res, next) {
  if (req.session && req.session.username) {
    next()
  } else {
    res.status(401).json({message: "You shall not pass"})
  }
}