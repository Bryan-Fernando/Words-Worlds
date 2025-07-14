import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyADeCpJYtoB69MqH9pAGsrYc-kY5E4Duus",
  authDomain: "words-worlds-ecf83.firebaseapp.com",
  projectId: "words-worlds-ecf83",
  storageBucket: "words-worlds-ecf83.firebasestorage.app",
  messagingSenderId: "29055935661",
  appId: "1:29055935661:web:a69cc5c742bc0b8270d224"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
