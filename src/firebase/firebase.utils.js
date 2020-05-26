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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return; 
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
   
    if(!snapShot.exists){
      const {displayName, email} = userAuth;
      const createdAt = new Date();
      
      try{
          await userRef.set({
            displayName, 
            email,
            createdAt,
            ...additionalData
          })
      }catch(error){
          console.log('error creating user', error.message);
      }
    }
    
    return userRef;
  };

  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle =() => auth.signInWithPopup(provider);

  export default firebase;

  // firestore.collection('users').document('eENy8Zg0L2gE2p8PewMh').collection('cartItems').document('ZtyMbmSKxpBCfUcNXY3K');
  // firestore.document('users/eENy8Zg0L2gE2p8PewMh/cartItems/ZtyMbmSKxpBCfUcNXY3K')
  // firestore.collection('users/eENy8Zg0L2gE2p8PewMh/cartItems')