import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeiiTi34w_3DjokA4DK6d-odtjXC5WSOE",
  authDomain: "drive-d25fc.firebaseapp.com",
  projectId: "drive-d25fc",
  storageBucket: "drive-d25fc.appspot.com",
  messagingSenderId: "894826561468",
  appId: "1:894826561468:web:8d51f99cd7d6badbe635b9",
  measurementId: "G-Y69PGPS48C",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, storage, auth, provider };
