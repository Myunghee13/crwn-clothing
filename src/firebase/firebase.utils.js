import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyBKUBYAdjwcswDASeTFZXV5WkcQ4xmttuo",
    authDomain: "crwn-db-1e414.firebaseapp.com",
    projectId: "crwn-db-1e414",
    storageBucket: "crwn-db-1e414.appspot.com",
    messagingSenderId: "499223223535",
    appId: "1:499223223535:web:7fc9d61cb5e13fd5458f1a",
    measurementId: "G-MW6WDZGLLQ"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;


