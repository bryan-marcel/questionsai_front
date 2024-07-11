// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAunvbR9y-XvaU9n7F8jUK0SV35Y-CyAZA",
    authDomain: "questionsai-front.firebaseapp.com",
    projectId: "questionsai-front",
    storageBucket: "questionsai-front.appspot.com",
    messagingSenderId: "818224902924",
    appId: "1:818224902924:web:9a22e3cae87e6630608f29",
    measurementId: "G-N5RNMYG8FP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);