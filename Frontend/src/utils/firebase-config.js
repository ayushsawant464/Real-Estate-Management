// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAC1w3bC9MQL0arV4f1WR0CfvUIq5he8tA",
    authDomain: "real-estate-management-feef5.firebaseapp.com",
    projectId: "real-estate-management-feef5",
    storageBucket: "real-estate-management-feef5.appspot.com",
    messagingSenderId: "269604783169",
    appId: "1:269604783169:web:33027a0b87c5bd4599b2c0",
    measurementId: "G-NC67BW800X"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
export const db = getFirestore(app)
