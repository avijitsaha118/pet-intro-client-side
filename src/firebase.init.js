// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9RWyooVLB1GLdGkVs6bWYyq8BD5XKN_c",
  authDomain: "pet-intro-app.firebaseapp.com",
  projectId: "pet-intro-app",
  storageBucket: "pet-intro-app.appspot.com",
  messagingSenderId: "730076982495",
  appId: "1:730076982495:web:0ee6ae895bef3da27d0d6a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;