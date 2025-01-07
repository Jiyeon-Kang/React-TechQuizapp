// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDrLdWbAPav8gvb87dBZr_RpAMF6v1TYbA",
    authDomain: "quizdata-87608.firebaseapp.com",
    projectId: "quizdata-87608",
    storageBucket: "quizdata-87608.firebasestorage.app",
    messagingSenderId: "634724199781",
    appId: "1:634724199781:web:6e2a3f1caa3340c254858c",
    measurementId: "G-9997NP5RXZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);