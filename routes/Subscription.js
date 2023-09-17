const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
} = require("../helper/verifyToken");
const router = require("express").Router();
const Subscription = require("../models/Subscription");
const {createSubscription, updateSubscription, deleteSubscription, getSubscriptionByUserId} = require("../controllers/Subscription")

// CREATE
router.post("/", verifyTokenAndAdmin, createSubscription);

// UPDATE
router.put("/:id", verifyTokenAndAdmin, updateSubscription);

// DELETE
router.delete("/:id", verifyTokenAndAdmin, deleteSubscription);

//Get all by user id
router.get("/find/:id", verifyTokenAndAuthorization, getSubscriptionByUserId);



module.exports = router;