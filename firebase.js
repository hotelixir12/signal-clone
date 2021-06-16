import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDfr8HjGJu3GJv_QTFW251WEiORlpW24mw",
    authDomain: "signal-clone123.firebaseapp.com",
    databaseURL: "https://signal-clone123-default-rtdb.firebaseio.com",
    projectId: "signal-clone123",
    storageBucket: "signal-clone123.appspot.com",
    messagingSenderId: "195875578156",
    appId: "1:195875578156:web:791a7f1d0dd8cb98a28c89",
    measurementId: "G-ZW84824NY9"
  };
let app;

if (firebase.apps.length === 0){
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export {db, auth};