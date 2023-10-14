// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import env from"react-dotenv";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: env.REACT_APP_apiKey,
  authDomain: env.REACT_APP_authDomain,
  projectId: env.REACT_APP_projectId,
  storageBucket: env.REACT_APP_storageBucket,
  messagingSenderId: env.REACT_APP_messagingSenderId,
  appId: env.REACT_APP_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);