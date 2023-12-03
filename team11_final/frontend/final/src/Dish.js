// models/Dish.js
const mongoose = require('mongoose');

const dishSchema = new mongoose.Schema({
  id: String,
  dishName: String,
  dishPrice: Number,
  // Add other fields as needed
});

const MenuItem = mongoose.model('MenuItem', dishSchema);

module.exports = MenuItem;
