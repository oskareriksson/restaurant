require("dotenv").config();
const express = require("express");
let app = express();
const mongodb = require("mongodb");
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const logger = require("morgan");

//User model for authentication
const User = require("./models/User.js");

//View engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use("/public", express.static("public"));
app.use(logger("dev"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(session({
  secret: "supersecret",
  resave: true,
  saveUninitialized: false
}));

//Passport setup
app.use(passport.initialize());
app.use(passport.session());
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_HOST);

mongoose.connection.on("error", (error) => {
  console.log(error);
});

mongoose.connection.on("connected", () => {
  console.log("Connection to database established!");
});

module.exports = app;