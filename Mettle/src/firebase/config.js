// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcw7WBZgmw-BOxZoNyjduDjmYvDFPghv0",
  authDomain: "mettle-f958d.firebaseapp.com",
  projectId: "mettle-f958d",
  storageBucket: "mettle-f958d.appspot.com",
  messagingSenderId: "153355729231",
  appId: "1:153355729231:web:74346c63fe94a89aaf6d3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);