const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
} = require("../helper/verifyToken");
const router = require("express").Router();

const CartItem = require("../models/CartItem");
const {createCartItem, updateCartItem, deleteCartItem, getCart} = require("../controllers/CartItem")

// CREATE
router.post("/", verifyTokenAndAuthorization, createCartItem);

// UPDATE
router.put("/:id", verifyTokenAndAuthorization, updateCartItem);

// DELETE
router.delete("/:id", verifyTokenAndAuthorization, deleteCartItem);

// GET USER CART
router.get("/find/:userId", verifyTokenAndAuthorization, getCart);


module.exports = router;