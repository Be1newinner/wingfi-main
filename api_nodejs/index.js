const axios = require("axios");
const crypto = require("crypto");

function createSHA256Hash(data) {
  return crypto.createHash("sha256").update(data).digest("hex");
}

function encodeJSONBase64(jsonData) {
  const jsonString = JSON.stringify(jsonData);
  return Buffer.from(jsonString).toString("base64");
}

async function initiatePayment({ transactionID, userID, amt, contact }) {
  const PHONEPE_API_KEY = "ff9fdcf3-ac9b-4d1b-82e4-18798d236647";

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

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error initiating payment:", error);
  }
}

initiatePayment({
  transactionID: "WINGFI81305062840001",
  userID: "8130506284",
  amt: 1,
  contact: "8130506284",
});
