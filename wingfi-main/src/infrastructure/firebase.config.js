import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_APIKEY,
  authDomain: process.env.auth.wingfi.in,
  databaseURL:
    "https://wingfi-9b5b7-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "wingfi-9b5b7",
  storageBucket: "wingfi-9b5b7.appspot.com",
  messagingSenderId: "621809457183",
  appId: "1:621809457183:web:00e65c6d00c15f9d85dd2a",
};

export const googleLogin = {
  web: {
    client_id:
      "621809457183-9i4gceno8lq52il0d9cdphim06u54mv6.apps.googleusercontent.com",
    project_id: "wingfi-9b5b7",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_secret: "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",
    redirect_uris: [
      "http://localhost",
      "http://localhost:3000",
      "https://wingfi.in",
      "https://wingfi.vercel.app",
    ],
    javascript_origins: [
      "http://localhost",
      "http://localhost:3000",
      "https://wingfi.vercel.app",
      "https://wingfi.in",
    ],
  },
};

export const googleLog2 = {
  client_id:
    "621809457183-9a7e9pt4ri46nvm6pljq8203dnenu6ko.apps.googleusercontent.com",
  client_secret: "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`",
};

export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const firebaseAuth = getAuth(app);
export const firebaseRealtime = getDatabase(app);
export const googleProvider = new GoogleAuthProvider();
