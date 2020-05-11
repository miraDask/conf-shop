import firebase from 'firebase/app';


import 'firebase/firestore';
import 'firebase/auth';

const configuration = {
    apiKey: "AIzaSyCidFQfo1w5hNs_XIYEBPkZ6t1_0NYn4DI",
    authDomain: "confidence-shop.firebaseapp.com",
    databaseURL: "https://confidence-shop.firebaseio.com",
    projectId: "confidence-shop",
    storageBucket: "confidence-shop.appspot.com",
    messagingSenderId: "601037202062",
    appId: "1:601037202062:web:a5c397bb3c40750a66dfdf",
    measurementId: "G-CK7QZFBQRM"
  };

  firebase.initializeApp(configuration); 

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt : 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;