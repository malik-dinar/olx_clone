import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQCsrFyuSwsZYS_M8qNAFE0-cArOSUwa8",
  authDomain: "olxx-1c8c7.firebaseapp.com",
  projectId: "olxx-1c8c7",
  storageBucket: "olxx-1c8c7.appspot.com",
  messagingSenderId: "367149748317",
  appId: "1:367149748317:web:646383adef6deb60273db4",
  measurementId: "G-CYQJXP5HNC"
};


export default firebase.initializeApp(firebaseConfig)