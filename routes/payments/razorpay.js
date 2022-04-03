const express = require("express");
const router = express.Router();
const Razorpay = require("razorpay");

var instance = new Razorpay({
  key_id: "rzp_test_p6Oi9ye5a2q9cH",
  key_secret: "7j1gmjM9NdHsNZYT8Ldnf6r3",
});

router.post("/", async (req, res) => {
  const payment_capture = 1;
  const amount = 499;
  const currency = "INR";

  //Generate order id
  const order_id = Math.floor(Math.random() * 100000);

  const options = {
    amount: amount * 100,
    currency,
    receipt: order_id,
    payment_capture,
  };

  try {
    const response = await instance.orders.create(options);
    console.log(response);
    res.json({response});
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
