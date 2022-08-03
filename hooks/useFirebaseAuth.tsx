// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaLPpLckHyQUSb3d0VgOTQoQmqbwrvrVA",
  authDomain: "my-portfolio-5ff59.firebaseapp.com",
  databaseURL: "https://my-portfolio-5ff59-default-rtdb.firebaseio.com",
  projectId: "my-portfolio-5ff59",
  storageBucket: "my-portfolio-5ff59.appspot.com",
  messagingSenderId: "77552819301",
  appId: "1:77552819301:web:9c39849ef2a53839ae3a8c",
  measurementId: "G-5TR80P3JHK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function useFirebaseAuth() {}
