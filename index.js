const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

// Connect to DB
mongoose.connect(
    process.env.MONGO_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("Connected to MongoDB");
    }
);

// Import Routes
const userRoute = require("./routes/user");
const menuItemRoute = require("./routes/MenuItem");
const cartItemRoute = require("./routes/CartItem");
const orderRoute = require("./routes/Order");
const subscriptionRoute = require("./routes/Subscription");
const paymentRoute = require("./routes/PaymentGateway");
const subscriptionRoutePlan = require("./routes/SubscriptionPlan");



// Route Middlewares
app.use("/api/user", userRoute);
app.use("/api/menuItem", menuItemRoute);
app.use("/api/cartItem", cartItemRoute);
app.use("/api/order", orderRoute);
app.use("/api/subscription", subscriptionRoute);
app.use("/api/payment", paymentRoute);
app.use("/api/subscriptionPlan", subscriptionRoutePlan);


app.listen(5000, () => {
    console.log(`Server is running on 5000`);
});