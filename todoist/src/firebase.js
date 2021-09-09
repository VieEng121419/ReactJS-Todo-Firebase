import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyAz4I_eLQ7uIUDne72fmPQUNIl6nI7nrJk",
  authDomain: "todoist-8e499.firebaseapp.com",
  databaseURL:
    "https://todoist-8e499-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "todoist-8e499",
  storageBucket: "todoist-8e499.appspot.com",
  messagingSenderId: "772688819336",
  appId: "1:772688819336:web:2298307f829f70b3881b3d",
});

export { firebaseConfig as firebase };
