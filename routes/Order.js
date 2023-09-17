const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
} = require("../helper/verifyToken");
const router = require("express").Router();
const Order = require("../models/Order");
const {createOrder, updateOrder, deleteOrder, getOrders, getAllOrders} = require("../controllers/Order")

// CREATE
router.post("/", verifyTokenAndAuthorization, createOrder);

// UPDATE
router.put("/:id", verifyTokenAndAuthorization, updateOrder);

// DELETE
router.delete("/:id", verifyTokenAndAuthorization, deleteOrder);

// GET USER ORDERS
router.get("/find/:userId", verifyTokenAndAdmin, getOrders);

// GET ALL
router.get("/", verifyTokenAndAdmin, getAllOrders);

module.exports = router;