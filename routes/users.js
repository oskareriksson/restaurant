const router = require("express").Router();
const passport = require("passport");
const User = require("../models/User.js");

//Function that checks if a user is logged in
const isLoggedIn = (req, res, next) => {
  if(req.isAuthenticated()) return next();
  res.redirect("/");
};

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
      if(error){
        res.send(error);
      } else {
        res.send("User successfully added!");
      }
    });
});

//Route for logging in
router.post("/login", passport.authenticate("local"), (req, res) => {
  console.log("\n" + "Successfully logged in!");
  res.redirect("/");
});

//Route for getting all users
router.get("/all", (req, res) => {
  User.find({}, "username admin", (error, result) => {
    if(error) res.send(error);
    res.json(result);
  });
});



module.exports = router;