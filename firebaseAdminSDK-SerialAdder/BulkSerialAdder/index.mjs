import admin from "firebase-admin";

import serviceAccount from "../serviceAccountKey.json";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://shipsar-main-default-rtdb.firebaseio.com/",
});

export default async function BulkSerialAdder({ session, otp, phone }) {
  try {
    // const projectId = 'YOUR_PROJECT_ID';

    const { Storage } = require("@google-cloud/storage");

    async function authenticateImplicitWithAdc() {
      // This snippet demonstrates how to list buckets.
      // NOTE: Replace the client created below with the client required for your application.
      // Note that the credentials are not specified when constructing the client.
      // The client library finds your credentials using ADC.
      const storage = new Storage({
        projectId,
      });
      const [buckets] = await storage.getBuckets();
      console.log("Buckets:");

      for (const bucket of buckets) {
        console.log(`- ${bucket.name}`);
      }

      console.log("Listed all storage buckets.");
    }

    authenticateImplicitWithAdc();

    // if (data?.Status === "Success") {
    //   const user = await signInWithPhoneNumber({ phoneNumber: `+91${phone}` });
    //   return user;
    // } else {
    //   return {
    //     error: data?.Details || "Validation Failed!",
    //     status: 401,
    //     user: null,
    //   };
    // }
  } catch (error) {
    return { error: "Request failed", status: 402, data: null };
  }
}
