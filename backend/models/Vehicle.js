const mongoose = require("mongoose");

const VehicleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, enum: ["bus", "train", "flight"], required: true },
  number: { type: String, required: true },
  capacity: { type: Number, required: true },
  availableSeats: { type: Number, required: true },
  price: { type: Number, required: true },
  route: {
    from: { type: String, required: true },
    to: { type: String, required: true },
  },
  date: { type: String, required: true }, // store in YYYY-MM-DD
});

module.exports = mongoose.model("Vehicle", VehicleSchema);
