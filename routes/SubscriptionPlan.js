const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
} = require("../helper/verifyToken");
const router = require("express").Router();
const SubscriptionPlan = require("../models/SubscriptionPlan");
const {createSubscriptionPlan, updateSubscriptionPlan, deleteSubscriptionPlan, getSubscriptionPlan} = require("../controllers/SubscriptionPlan")

// CREATE
router.post("/", verifyTokenAndAdmin, createSubscriptionPlan);

// UPDATE
router.put("/:id", verifyTokenAndAdmin, updateSubscriptionPlan);

// DELETE
router.delete("/:id", verifyTokenAndAdmin, deleteSubscriptionPlan);

//Get all by user id
router.get("/find/:id", verifyTokenAndAuthorization, getSubscriptionPlan);

module.exports = router;