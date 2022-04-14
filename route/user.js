const router = require("express").Router();
// let User = require('../models/user.model');

router.get("/", (req, res) => {
  res.send("Users");
});

module.exports = router