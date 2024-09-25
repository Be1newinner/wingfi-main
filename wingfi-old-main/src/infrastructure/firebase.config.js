import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAUzO4vwXEQXrvoI2O16Ng62mESzgTFZQA",
  authDomain: "wingfi-9b5b7.firebaseapp.com",
  projectId: "wingfi-9b5b7",
  storageBucket: "wingfi-9b5b7.appspot.com",
  messagingSenderId: "621809457183",
  appId: "1:621809457183:web:00e65c6d00c15f9d85dd2a",
};

export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
