// Import the functions you need from the SDKs you need
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { getDatabase, onValue, push, ref } from "firebase/database";

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

export default function useFirebaseAuth() {
  const authCtx = useContext(AuthContext);
  // Firebase Auth
  const auth = getAuth(app);

  // login status
  const loginStatus = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("logged in");
      } else {
        console.log("no user/logged out");
      }
    });
  };

  // Sign in existing user
  const login = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        loginStatus();
        authCtx.setLoginStatus(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        loginStatus();
      });
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        console.log("Successfully signed out");
        loginStatus();
        authCtx.setLoginStatus(false);
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
        loginStatus();
      });
  };

  // Firebase DB
  const db = getDatabase(app);
  const dbBlogs = ref(db, "blogs");

  // WRITE Firebase DB
  const writeBlogData = (
    title: string,
    description: string,
    imgUrl: string,
    date: string,
    _id: string
  ) => {
    push(dbBlogs, {
      title: title,
      description: description,
      imgUrl: imgUrl,
      date: date,
      _id: _id,
    })
      .then(() => console.log("success"))
      .catch((error) => {
        console.log(error);
      });
  };

  // READ Firebase DB
  const readBlogData = () => {
    const db = getDatabase(app);
    const dbRef = ref(db, "blogs");
    let newArrObj;
    onValue(dbRef, (snapshot) => {
      newArrObj = Object.values(snapshot.val());
      console.log(newArrObj); // I can see the array of objects in console.log
    });

    return newArrObj;
  };

  return { login, logout, loginStatus, writeBlogData, readBlogData };
}
