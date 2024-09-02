const admin = require("firebase-admin");
const privateKey = process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n");

const app = admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    privateKey,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  }),
  databaseURL:
    "https://wingfi-9b5b7-default-rtdb.asia-southeast1.firebasedatabase.app",
});

const firestore = admin.firestore(app);
const auth = admin.auth(app);
const realtimeDb = admin.database(app);

module.exports = { app, firestore, auth, realtimeDb };
