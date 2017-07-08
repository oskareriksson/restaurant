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

//Routes
const routes = require("./routes/routes.js");
const userRoutes = require("./routes/users.js");
const reservationRoutes = require("./routes/reservations.js");

//View engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "public")));
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

app.use("/", routes);
app.use("/users", userRoutes);
app.use("/reservations", reservationRoutes);

//404 Handler
app.use(function (req, res, next) {
  res.status(404);
  res.render("404.hbs");
});

module.exports = app;