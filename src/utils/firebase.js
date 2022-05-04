import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCSvZGzwIFBorHL1ZfU5f9GMhqCQjD6AeM",
  authDomain: "clone-64cce.firebaseapp.com",
  projectId: "clone-64cce",
  storageBucket: "clone-64cce.appspot.com",
  messagingSenderId: "677224323144",
  appId: "1:677224323144:web:48058d3ea4b5084929e07d",
  measurementId: "G-GFEHEDCW3N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()


export default db