const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
} = require("../helper/verifyToken");
const router = require("express").Router();
const MenuItem = require("../models/MenuItem");
const {createMenuItem, updateMenuItem, deleteMenuItem, getMenuItemByRestaurantId} = require("../controllers/MenuItem")

// CREATE
router.post("/", verifyTokenAndAdmin, createMenuItem);

// UPDATE 
router.put("/:id", verifyTokenAndAdmin, updateMenuItem);

// DELETE
router.delete("/:id", verifyTokenAndAdmin, deleteMenuItem);

//Get all by restaurant id
router.get("/find/:id", verifyTokenAndAuthorization, getMenuItemByRestaurantId);




module.exports = router;