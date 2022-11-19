// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAF7JBsdcI7wPq9GRDAPFSrTygS-diGICs",
  authDomain: "firebasics-56d8f.firebaseapp.com",
  projectId: "firebasics-56d8f",
  storageBucket: "firebasics-56d8f.appspot.com",
  messagingSenderId: "376294834743",
  appId: "1:376294834743:web:7581effc8f85b1dbaff5b2",
  measurementId: "G-0D1XWMBTE3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//intialize firestore database
export const db=getFirestore(app);
//intialize a bucket

export const bucket=getStorage(app)