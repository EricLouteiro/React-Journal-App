// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZ7gEmZcTObcOOmWpJ1yjSJtt7nK_djco",
  authDomain: "eric-react-app.firebaseapp.com",
  projectId: "eric-react-app",
  storageBucket: "eric-react-app.appspot.com",
  messagingSenderId: "179283114172",
  appId: "1:179283114172:web:78740fc29da2e42914f8b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const googleSingIn = new GoogleAuthProvider();

export {
    app,
    db,
    auth,
    googleSingIn
}