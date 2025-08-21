const Vehicle = require("../models/Vehicle");

// Add Vehicle
exports.addVehicle = async (req, res) => {
  try {
    const { name, type, number, capacity, availableSeats, price, route, date } = req.body;

    // Make sure all required fields are provided
    if (!name || !type || !number || !capacity || !availableSeats || !price || !route || !route.from || !route.to || !date) {
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
      date
    });

    await newVehicle.save();
    res.status(201).json({ message: "✅ Vehicle added successfully", vehicle: newVehicle });
  } catch (error) {
    res.status(400).json({ message: "❌ Error adding vehicle", error: error.message });
  }
};

// Get all vehicles
exports.getVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.find();
    res.json(vehicles);
  } catch (error) {
    res.status(500).json({ message: "❌ Error fetching vehicles", error: error.message });
  }
};

// Get vehicle by ID
exports.getVehicleById = async (req, res) => {
  try {
    const vehicle = await Vehicle.findById(req.params.id);
    if (!vehicle) return res.status(404).json({ message: "Vehicle not found" });
    res.json(vehicle);
  } catch (error) {
    res.status(500).json({ message: "❌ Error fetching vehicle", error: error.message });
  }
};

// Update vehicle
exports.updateVehicle = async (req, res) => {
  try {
    const updatedVehicle = await Vehicle.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ message: "✅ Vehicle updated", vehicle: updatedVehicle });
  } catch (error) {
    res.status(400).json({ message: "❌ Error updating vehicle", error: error.message });
  }
};

// Delete vehicle
exports.deleteVehicle = async (req, res) => {
  try {
    await Vehicle.findByIdAndDelete(req.params.id);
    res.json({ message: "✅ Vehicle deleted" });
  } catch (error) {
    res.status(500).json({ message: "❌ Error deleting vehicle", error: error.message });
  }
};
