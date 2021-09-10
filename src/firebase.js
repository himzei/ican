import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrGnmOr1T_FvkUE_xT_LELANYuR_GaIBQ",
  authDomain: "ican-13bfe.firebaseapp.com",
  databaseURL:
    "https://ican-13bfe-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ican-13bfe",
  storageBucket: "ican-13bfe.appspot.com",
  messagingSenderId: "100415578726",
  appId: "1:100415578726:web:17cb3b3f8f635b531383a7",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;
