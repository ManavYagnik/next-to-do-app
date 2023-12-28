// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6ORbX3kIO5irvDotx1kJqsv7AYM98EEA",
  authDomain: "my-todo-abe79.firebaseapp.com",
  projectId: "my-todo-abe79",
  storageBucket: "my-todo-abe79.appspot.com",
  messagingSenderId: "1029376482850",
  appId: "1:1029376482850:web:87bc635a64d2b6653e347b",
  measurementId: "G-57JGC3BJ59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const db = getFirestore(app);

export {db};