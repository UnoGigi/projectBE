const express = require("express");
const payment = express.Router()
const stripe = require("stripe")("sk_test_51OCR2cKhVUxkHr09PfQzjJsfj97HqJM3zcpe5vvIRW30krbWplIwfRokarjP6iVRapIiR49NSdYQSNn5zUBfFe2400Ui44CrGM")

payment.post("/create-payment-intent", async (req, res) => {
    const { items } = req.body;
  
    
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1000,
      currency: "USD",
      automatic_payment_methods: {
        enabled: true,
      },
    });

    res.send({
        clientSecret: paymentIntent.client_secret,
      });
    });

module.exports = payment