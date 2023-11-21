import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDLnDOBcGFrAvfy4NCvJ-BENtY2DL6eWGg",
  authDomain: "client-italy.firebaseapp.com",
  projectId: "client-italy",
  storageBucket: "client-italy.appspot.com",
  messagingSenderId: "811556554449",
  appId: "1:811556554449:web:80f60f7a1321e9250727f0",
  measurementId: "G-N3Z399KH2D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
