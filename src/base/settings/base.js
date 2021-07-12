import firebase from "firebase";

import "firebase/app-check";

import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCj5_u6rxiCYjPQhJmJoAu0I_cy5zueEgI",
  authDomain: "mfp-storage.firebaseapp.com",
  projectId: "mfp-storage",
  storageBucket: "mfp-storage.appspot.com",
  messagingSenderId: "691535507652",
  appId: "1:691535507652:web:ce1208c0442c3fd1cd1991",
  measurementId: "G-TXBSFMK9EZ",
};

export const app = firebase.initializeApp(firebaseConfig);

export const db = app.firestore();

//D25333BC-D447-42ED-8998-F2C9F5C5E1FC
