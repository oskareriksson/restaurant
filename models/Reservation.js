const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Reservation = new Schema({
  amountOfChairs: {type: Number, min: 1, max: 12, required: [true, "Enter the amount of chairs you want at the table."]},
  nameOfReservation: {type: String, required: [true, "Enter the name of the person who made the reservation."]}
});

module.exports = mongoose.model("Reservation", Reservation);