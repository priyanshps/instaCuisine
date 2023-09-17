const CartItem = require("../models/CartItem");

exports.createCartItem = async (req, res) => {
    const newCartItem = new CartItem(req.body);
    try {
        const savedCartItem = await newCartItem.save();
        res.status(201).json(savedCartItem);
    } catch (err) {
        res.status(500).json(err);
    }
}

exports.updateCartItem = async (req, res) => {
    try {
        const updatedCartItem = await CartItem.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedCartItem);
    } catch (err) {
        res.status(500).json(err);
    }
}

exports.deleteCartItem = async (req, res) => {
    try {
        await CartItem.findByIdAndDelete(req.params.id);
        res.status(200).json("CartItem has been deleted...");
    } catch (err) {
        res.status(500).json(err);
    }
}

exports.getCart = async (req, res) => {
    try {
        const cartItems = await CartItem.find({ userId: req.params.userId });
        res.status(200).json(cartItems);
    } catch (err) {
        res.status(500).json(err);
    }
}