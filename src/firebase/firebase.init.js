// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASJXfiqqbXhty1t3DhBSFK1uFB7lJzkyQ",
  authDomain: "simple-firebase-b7e28.firebaseapp.com",
  projectId: "simple-firebase-b7e28",
  storageBucket: "simple-firebase-b7e28.appspot.com",
  messagingSenderId: "822840672851",
  appId: "1:822840672851:web:102d02a4a88f03d0227ca6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app