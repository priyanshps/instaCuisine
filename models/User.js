const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  isShopOwner: {
    type: Boolean,
    default: false,
  }
});

// Create the User model
const User = mongoose.model('User', userSchema);

module.exports = User;
