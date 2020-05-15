import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCIELzEapD_cQDLxnqfp5gW_A_w-4YIFog",
    authDomain: "realones-db.firebaseapp.com",
    databaseURL: "https://realones-db.firebaseio.com",
    projectId: "realones-db",
    storageBucket: "realones-db.appspot.com",
    messagingSenderId: "620797816588",
    appId: "1:620797816588:web:09d107836cd64c4a976329",
    measurementId: "G-9VRMCWFNT7"
  };

  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle =() => auth.signInWithPopup(provider);

  export default firebase;
