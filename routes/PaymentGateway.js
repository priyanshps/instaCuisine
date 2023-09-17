const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_KEY);
const { stripePayment } = require("../controllers/PaymentGateway");


// CREATE
router.post("/payment", stripePayment)

module.exports = router;