const router = require("express").Router();
const passport = require("passport");
const Reservation = require("../models/Reservation.js");
const User = require("../models/User.js");

//Lists all reservations in database
router.get("/", (req, res) => {
  Reservation.find({}, (error, result) => {
    if(error) res.send(error);
    res.json(result);
  });
});

module.exports = router;