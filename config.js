import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
  apiKey: "AIzaSyCqkW5R9Ep-GeMGXfM-7tXQ7Tn3MrXWCZM",
  authDomain: "e-ride-b4fc7.firebaseapp.com",
  projectId: "e-ride-b4fc7",
  storageBucket: "e-ride-b4fc7.appspot.com",
  messagingSenderId: "33590172249",
  appId: "1:33590172249:web:7084f4b391f04f9d13ef48"
};
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
