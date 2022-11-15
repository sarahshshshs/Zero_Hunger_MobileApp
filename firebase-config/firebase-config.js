import { initializeApp, getApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAluQW7TnELr2LXNRXbeySSwnWbe_gmc4g",
  authDomain: "uee-project-d54e9.firebaseapp.com",
  databaseURL: "https://uee-project-d54e9-default-rtdb.firebaseio.com",
  projectId: "uee-project-d54e9",
  storageBucket: "uee-project-d54e9.appspot.com",
  messagingSenderId: "391882903025",
  appId: "1:391882903025:web:c1d2a909981f2dfff48850",
  measurementId: "G-BDBXP02FMT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

