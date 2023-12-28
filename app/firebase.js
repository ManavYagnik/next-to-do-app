// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtNfC8C3IUjE_6jllNGLIQJIrQ5TT-eA8",
    authDomain: "to-do-12034.firebaseapp.com",
    projectId: "to-do-12034",
    storageBucket: "to-do-12034.appspot.com",
    messagingSenderId: "351143660964",
    appId: "1:351143660964:web:f35a0da6ed8795fb63c531"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const db = getFirestore(app);

export {db};
