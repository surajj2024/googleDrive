import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyAVtuyj7TvuEWLQC6QnAJpghyFDr-wyDWU",
  authDomain: "driveclone-143c6.firebaseapp.com",
  projectId: "driveclone-143c6",
  storageBucket: "driveclone-143c6.appspot.com",
  messagingSenderId: "297829889165",
  appId: "1:297829889165:web:76621334050e62468c9ec4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, storage, auth, provider };
