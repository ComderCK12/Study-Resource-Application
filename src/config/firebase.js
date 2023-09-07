// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1BOTBZRKUYFmdicuRQg1I9nXw1XS2c0g",
  authDomain: "jarvsgig.firebaseapp.com",
  projectId: "jarvsgig",
  storageBucket: "jarvsgig.appspot.com",
  messagingSenderId: "37428965042",
  appId: "1:37428965042:web:3c34ee7d9ae2d8c373e3ab",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
