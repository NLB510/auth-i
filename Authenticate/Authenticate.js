const db = require('../data/model/userModel')
const bcrypt = require('bcryptjs')

module.exports = {
  authenticate
};


function authenticate(req, res, next) {
  const { username, password } = req.headers;
  console.log(req.headers);

  if (username && password) {
    db.findUserByName(username)
      .then(user => {
        // console.log(user);
        if (user && bcrypt.compareSync(password, user.password)) {
          next();
        } else {
          res.status(401).json({
            message: "Invalid Credentials"
          });
        }
      })
      .catch();
  } else {
    res.status(400).json({ message: "No credentials provided" });
  }
}