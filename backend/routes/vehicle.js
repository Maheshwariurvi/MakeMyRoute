const express = require("express");
const router = express.Router();
const Vehicle = require("../models/Vehicle");

// Create new vehicle
router.post("/", async (req, res) => {
  try {
    const { name, type, number, capacity, availableSeats, price, route, date } = req.body;

    if (!name || !type || !number || !capacity || !availableSeats || !price || !route?.from || !route?.to || !date) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newVehicle = new Vehicle({
      name,
      type,
      number,
      capacity,
      availableSeats,
      price,
      route,
      date,
    });

    await newVehicle.save();
    res.status(201).json({ message: "✅ Vehicle added successfully", vehicle: newVehicle });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error" });
  }
});

// Get all or filtered vehicles
router.get("/", async (req, res) => {
  try {
    const { from, to, type, date } = req.query;

    let query = {};
    if (from) query["route.from"] = { $regex: new RegExp(from, "i") };
    if (to) query["route.to"] = { $regex: new RegExp(to, "i") };
    if (type) query.type = type;
    if (date) query.date = date;

    const vehicles = await Vehicle.find(query);
    res.json(vehicles);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error" });
  }
});

// Get single vehicle
router.get("/:id", async (req, res) => {
  try {
    const vehicle = await Vehicle.findById(req.params.id);
    if (!vehicle) return res.status(404).json({ message: "Vehicle not found" });
    res.json(vehicle);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// Book a vehicle (reduce available seats)
router.post("/:id/book", async (req, res) => {
  try {
    const vehicle = await Vehicle.findById(req.params.id);
    if (!vehicle) return res.status(404).json({ message: "Vehicle not found" });

    if (vehicle.availableSeats <= 0) {
      return res.status(400).json({ message: "No seats available" });
    }

    vehicle.availableSeats -= 1;
    await vehicle.save();

    res.json({ message: "✅ Booking successful", vehicle });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
