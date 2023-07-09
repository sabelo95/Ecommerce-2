

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";




const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId
};
// const firebaseConfig = {
//   apiKey: "AIzaSyCIESXkLp77KUKkidAbOQEy4JssTWAMpps",
//   authDomain: "primerproyectoreact-eaf09.firebaseapp.com",
//   projectId: "primerproyectoreact-eaf09",
//   storageBucket: "primerproyectoreact-eaf09.appspot.com",
//   messagingSenderId: "1075289809297",
//   appId: "1:1075289809297:web:7c7453b19a9834319b3a30"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 export const db = getFirestore(app)