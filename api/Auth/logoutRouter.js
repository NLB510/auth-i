const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
  if (req.session) {
    req.session.destroy(err => {
      if (err) {
        res.send("There was an error logging out")
      } else {
        res.send("Goodbye")
      }
    })
  } else {
    res.end();
  }
  
});



module.exports = router;