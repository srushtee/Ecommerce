import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDhVNiaHdsbNXlBIMq7XYrf9U53qP33CMQ",
    authDomain: "ecommerce-e0b57.firebaseapp.com",
    databaseURL: "https://ecommerce-e0b57.firebaseio.com",
    projectId: "ecommerce-e0b57",
    storageBucket: "ecommerce-e0b57.appspot.com",
    messagingSenderId: "301217133456",
    appId: "1:301217133456:web:6e3228d75f4bbad8693915",
    measurementId: "G-NNDY9FCYLM"
  };

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;