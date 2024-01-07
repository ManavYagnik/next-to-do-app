import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBtNfC8C3IUjE_6jllNGLIQJIrQ5TT-eA8",
  authDomain: "to-do-12034.firebaseapp.com",
  projectId: "to-do-12034",
  storageBucket: "to-do-12034.appspot.com",
  messagingSenderId: "351143660964",
  appId: "1:351143660964:web:f35a0da6ed8795fb63c531"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
export {db};