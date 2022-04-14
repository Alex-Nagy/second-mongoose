const router = require("express").Router();
// let User = require('../models/user.model');

router.get("/demo", (req, res) => {
  res.send("Books");
});

module.exports = router