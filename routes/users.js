const router = require("express").Router();
const passport = require("passport");
const User = require("../models/User.js");

//Renders register.hbs
router.get("/register", (req, res) => {
  res.render("register");
});

module.exports = router;