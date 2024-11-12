import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chat-app-556cd.firebaseapp.com",
  projectId: "chat-app-556cd",
  storageBucket: "chat-app-556cd.firebasestorage.app",
  messagingSenderId: "1042245390203",
  appId: "1:1042245390203:web:a2f204aa9df220d8edb7de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();