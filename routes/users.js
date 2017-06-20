const router = require("express").Router();
const passport = require("passport");
const User = require("../models/User.js");

//Renders register.hbs
router.get("/register", (req, res) => {
  res.render("register", {
    title: "User Registration"
  });
});

//Route for registering a new user
router.post("/register", (req, res) => {
  User.register(new User(
    {
      username: req.body.username,
      password:req.body.password
    }), req.body.password, (error, user) => {
      if(error) res.send(error);
      res.send("User successfully added!");
    });
});

module.exports = router;