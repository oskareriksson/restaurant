const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Table = new Schema({
  availableSeats: {type: Number, min: 1, max: 12, required: [true, "You need to enter the amount of seats available."]},
});