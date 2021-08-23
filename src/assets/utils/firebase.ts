import firebase from "firebase";
import '@firebase/storage';

var firebaseConfig = {
  apiKey: "AIzaSyB0evYEGyn3uxM_ftI0D_RFSTjwK0s2Qd8",
  authDomain: "resume-6478a.firebaseapp.com",
  projectId: "resume-6478a",
  storageBucket: "resume-6478a.appspot.com",
  messagingSenderId: "463728484382",
  appId: "1:463728484382:web:81e0272a61ae7969674e0f",
  measurementId: "G-DMW3RJ85WD"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const storageRef = firebase.storage();

