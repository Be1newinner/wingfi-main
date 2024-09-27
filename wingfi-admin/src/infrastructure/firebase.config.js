import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API,
  authDomain: process.env.NEXT_PUBLIC_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_DATABASEURL,
  projectId: process.env.NEXT_PUBLIC_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_SENDERID,
  appId: process.env.NEXT_PUBLIC_APPID,
};

console.log(firebaseConfig)

export const googleLogin = {
  web: {
    client_id: process.env.NEXT_PUBLIC_CLIENTID,
    project_id: process.env.NEXT_PUBLIC_PROJECTID,
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_secret: process.env.NEXT_PUBLIC_CLIENT_SC,
    redirect_uris: [
      "http://localhost",
      "http://localhost:3000",
      "https://wingfi.in",
      "https://wingfi.vercel.app",
      "https://wingfi.in",
      "https://wingfiindia.com",
    ],
    javascript_origins: [
      "http://localhost",
      "http://localhost:3000",
      "https://wingfi.vercel.app",
      "https://wingfi.in",
      "https://wingfiindia.com",
    ],
  },
};

export const googleLog2 = {
  client_id: process.env.NEXT_PUBLIC_LOG2CLIENTID,
  client_secret: process.env.LOG2_CLIENT_SC,
};

export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const firebaseAuth = getAuth(app);
export const firebaseRealtime = getDatabase(app);
export const googleProvider = new GoogleAuthProvider();
