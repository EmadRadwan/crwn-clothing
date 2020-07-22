import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDLtg0URMuo5dGnlCXXLSwgJA_r-2DrT8E",
  authDomain: "crwn-db-1b69e.firebaseapp.com",
  databaseURL: "https://crwn-db-1b69e.firebaseio.com",
  projectId: "crwn-db-1b69e",
  storageBucket: "crwn-db-1b69e.appspot.com",
  messagingSenderId: "909849854037",
  appId: "1:909849854037:web:4ffb9f4c01fdcacae3d4dc",
  measurementId: "G-BK9NWD475Y",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
