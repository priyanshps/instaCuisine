const Subscription = require("../models/Subscription");

exports.createSubscription = async (req, res) => {
    const newSubscription = new Subscription(req.body);
    try {
        const savedSubscription = await newSubscription.save();
        res.status(201).json(savedSubscription);
    } catch (err) {
        res.status(500).json(err);
    }
}

exports.updateSubscription = async (req, res) => {
    try {
        const updatedSubscription = await Subscription.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedSubscription);
    } catch (err) {
        res.status(500).json(err);
    }
}

exports.deleteSubscription = async (req, res) => {
    try {
        await Subscription.findByIdAndDelete(req.params.id);
        res.status(200).json("Subscription has been deleted...");
    } catch (err) {
        res.status(500).json(err);
    }
}

exports.getSubscriptionByUserId = async (req, res) => {
    try {
        const subscriptions = await Subscription.find({ userId: req.params.userId });
        res.status(200).json(subscriptions);
    } catch (err) {
        res.status(500).json(err);
    }
}