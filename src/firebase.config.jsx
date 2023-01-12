// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbpbu8qiwvRpKYsUSddVjbvGeYV3YC6lc",
  authDomain: "netflix-clone-apt.firebaseapp.com",
  projectId: "netflix-clone-apt",
  storageBucket: "netflix-clone-apt.appspot.com",
  messagingSenderId: "1005388164874",
  appId: "1:1005388164874:web:2a5783706e23c99b6314f3",
  measurementId: "G-Q7ML7P0TDV"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
