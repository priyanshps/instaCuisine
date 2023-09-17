//createSubscriptionPlan, updateSubscriptionPlan, deleteSubscriptionPlan, getSubscriptionPlan

const SubscriptionPlan = require("../models/SubscriptionPlan");

exports.createSubscriptionPlan = async (req, res) => {
    const newSubscriptionPlan = new SubscriptionPlan(req.body);
    try {
        const savedSubscriptionPlan = await newSubscriptionPlan.save();
        res.status(201).json(savedSubscriptionPlan);
    } catch (err) {
        res.status(500).json(err);
    }
}

exports.updateSubscriptionPlan = async (req, res) => {
    try {
        const updateSubscription = await SubscriptionPlan.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updateSubscription);
    } catch (err) {
        res.status(500).json(err);
    }
}

exports.deleteSubscriptionPlan = async (req, res) => {
    try {
        await SubscriptionPlan.findByIdAndDelete(req.params.id);
        res.status(200).json("SubscriptionPlan has been deleted...");
    } catch (err) {
        res.status(500).json(err);
    }
}