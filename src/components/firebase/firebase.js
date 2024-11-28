// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfIsItRo9boi9FoS80IxxmW_LiXbeZWoQ",
  authDomain: "temple-bdfa4.firebaseapp.com",
  projectId: "temple-bdfa4",
  storageBucket: "temple-bdfa4.appspot.com",
  messagingSenderId: "828261697340",
  appId: "1:828261697340:web:db9a0ca903fa76dc03c039"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
