const mongoose = require('mongoose');

// Define the MenuItem schema
const menuItemSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

// Create the MenuItem model
const MenuItem = mongoose.model('MenuItem', menuItemSchema);

module.exports = MenuItem;
