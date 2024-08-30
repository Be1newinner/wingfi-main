// pages/api/initiate-payment.js

import axios from "axios";
import crypto from "crypto";

// Function to create SHA-256 hash
function createSHA256Hash(data) {
  return crypto.createHash("sha256").update(data).digest("hex");
}

// Function to encode JSON as Base64
function encodeJSONBase64(jsonData) {
  const jsonString = JSON.stringify(jsonData);
  return Buffer.from(jsonString).toString("base64");
}

// Environment variable for API key
const PHONEPE_API_KEY = process.env.PHONEPE_API_KEY;

// API Route handler
export default async function handler(req, res) {
  // Check the request method
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  // Extract parameters from the request body
  const { transactionID, userID, amt, contact } = req.body;

  // Create the payload
  const payload = {
    merchantId: "M22BKTHM8KGOC",
    merchantTransactionId: transactionID,
    merchantUserId: userID,
    amount: amt * 100,
    redirectUrl: "https://webhook.site/redirect-url",
    redirectMode: "REDIRECT",
    callbackUrl: "https://webhook.site/callback-url",
    mobileNumber: contact,
    paymentInstrument: {
      type: "PAY_PAGE",
    },
  };

  const base64Payload = encodeJSONBase64(payload);
  const xVerify =
    createSHA256Hash(`${base64Payload}/pg/v1/pay${PHONEPE_API_KEY}`) + "###1";
  const payloadString = JSON.stringify({
    request: base64Payload,
  });

  try {
    // Make the API request
    const response = await axios.post(
      "https://api.phonepe.com/apis/hermes/pg/v1/pay",
      payloadString,
      {
        headers: {
          "Content-Type": "application/json",
          "X-VERIFY": xVerify,
        },
      }
    );

    // Return the response data
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error initiating payment:", error);
    res.status(500).json({ message: "Error initiating payment" });
  }
}
