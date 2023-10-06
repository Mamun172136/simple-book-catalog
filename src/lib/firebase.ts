// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBK7gHl7Dfnc5otNvT4V30RPD7m4C_IbYA",
  authDomain: "simple-book-catalog-b8a2f.firebaseapp.com",
  projectId: "simple-book-catalog-b8a2f",
  storageBucket: "simple-book-catalog-b8a2f.appspot.com",
  messagingSenderId: "254007773409",
  appId: "1:254007773409:web:83e350e1369540d3740fa0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
