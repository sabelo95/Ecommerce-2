// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Resto del código...

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIESXkLp77KUKkidAbOQEy4JssTWAMpps",
  authDomain: "primerproyectoreact-eaf09.firebaseapp.com",
  projectId: "primerproyectoreact-eaf09",
  storageBucket: "primerproyectoreact-eaf09.appspot.com",
  messagingSenderId: "1075289809297",
  appId: "1:1075289809297:web:7c7453b19a9834319b3a30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 export const db = getFirestore(app)