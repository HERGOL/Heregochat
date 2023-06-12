import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBj8GTsK3qydtmnHzIERLy9aPubvDcQt1o",
  authDomain: "univfind-57d3c.firebaseapp.com",
  projectId: "univfind-57d3c",
  storageBucket: "univfind-57d3c.appspot.com",
  messagingSenderId: "587362361793",
  appId: "1:587362361793:web:1b4b953f160dc3f7708f40"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
