const crypto = require("crypto");

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
module.exports = async function handler(req, res) {
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
    // Make the API request using fetch
    const response = await fetch(
      "https://api.phonepe.com/apis/hermes/pg/v1/pay",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-VERIFY": xVerify,
        },
        body: payloadString,
      }
    );

    // Parse the response
    const data = await response.json();

    // Check if the response was successful
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Return the response data
    res.status(200).json(data);
  } catch (error) {
    console.error("Error initiating payment:", error);
    res.status(500).json({ message: "Error initiating payment" });
  }
};
