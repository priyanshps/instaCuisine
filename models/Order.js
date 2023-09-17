const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  userId: {
    type: String,
    required: true,
  },
  items: [ {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CartItem', 
    required: true,
  }], 
  status: {
    type: String,
    required: true,
  },
});

// Create the Order model
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
