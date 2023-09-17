const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  menuItem: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'MenuItem', 
      required: true,
    }
  ],
  quantity: {
    type: Number,
    required: true,
  },
});

// Create the CartItem model
const CartItem = mongoose.model('CartItem', cartItemSchema);

module.exports = CartItem;
