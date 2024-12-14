// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNtt13xd8NrpMJ7F60BV1bjhFWlXUxOZo",
  authDomain: "social-media-48783.firebaseapp.com",
  projectId: "social-media-48783",
  storageBucket: "social-media-48783.firebasestorage.app",
  messagingSenderId: "546515156110",
  appId: "1:546515156110:web:e9ae429f9f73ce42261ddf",
  measurementId: "G-C00MF03V9P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, signInWithPopup };
