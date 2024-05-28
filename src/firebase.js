// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
/* import { getAnalytics } from "firebase/analytics"; */

//import firebase from 'firebase/app';
import { getFirestore } from "firebase/firestore";
//import 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAouwIvjx4B0UJhC7jQFOrWEXe_i0UliL4",
  authDomain: "sportilabs.firebaseapp.com",
  projectId: "sportilabs",
  storageBucket: "sportilabs.appspot.com",
  messagingSenderId: "454708319710",
  appId: "1:454708319710:web:e417d30c13eb60fd96394f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
/* const analytics = getAnalytics(app); */

//export const firestore = firebase.firestore();
export const db = getFirestore(app);