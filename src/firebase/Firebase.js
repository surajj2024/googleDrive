import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGwXtHqKuR-irwAeMOLi-xxAFNkq65ZD4",
  authDomain: "drive-f0479.firebaseapp.com",
  projectId: "drive-f0479",
  storageBucket: "drive-f0479.appspot.com",
  messagingSenderId: "447461514006",
  appId: "1:447461514006:web:8a40963eb4b3947925ce37"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, storage, auth, provider };
