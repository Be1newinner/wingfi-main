import admin from "firebase-admin";

let privateKey = "";

if (process.env.FIREBASE_PRIVATE_KEY) {
  privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n");
}

export const app = admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    privateKey,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  }),
  databaseURL:
    "https://wingfi-9b5b7-default-rtdb.asia-southeast1.firebasedatabase.app",
});

export const firestore = admin.firestore(app);
export const auth = admin.auth(app);
export const realtimeDb = admin.database(app);