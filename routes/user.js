const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const { register, login } = require("../controllers/User.js");

// REGISTER
router.post("/register", register)

// LOGIN
router.post("/login", login)



module.exports = router;