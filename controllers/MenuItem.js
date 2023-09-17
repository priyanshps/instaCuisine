//createMenuItem, updateMenuItem, deleteMenuItem, getMenuItemByRestaurantId
const MenuItem = require("../models/MenuItem");

exports.createMenuItem = async (req, res) => {
    const newMenuItem = new MenuItem(req.body);
    try {
        const savedMenuItem = await newMenuItem.save();
        res.status(201).json(savedMenuItem);
    } catch (err) {
        res.status(500).json(err);
    }
}

exports.updateMenuItem = async (req, res) => {
    try {
        const updatedMenuItem = await MenuItem.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedMenuItem);
    } catch (err) {
        res.status(500).json(err);
    }
}

exports.deleteMenuItem = async (req, res) => {
    try {
        await MenuItem.findByIdAndDelete(req.params.id);
        res.status(200).json("MenuItem has been deleted...");
    } catch (err) {
        res.status(500).json(err);
    }
}

exports.getMenuItemByRestaurantId = async (req, res) => {
    try {
        const menuItems = await MenuItem.find({ restaurantId: req.params.id });
        res.status(200).json(menuItems);
    } catch (err) {
        res.status(500).json(err);
    }
}