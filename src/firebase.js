import app from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



const firebaseConfig = {
    apiKey: "AIzaSyCzuNVzVohgnmzp7y9aLcgdE4-3p2XCRO4",
    authDomain: "urlink-5892c.firebaseapp.com",
    projectId: "urlink-5892c",
    storageBucket: "urlink-5892c.appspot.com",
    messagingSenderId: "1032544418002",
    appId: "1:1032544418002:web:5c9397f5121346f2e4150b",
    measurementId: "G-BTNN3G7446"
  };
  const firebase = app.initializeApp(firebaseConfig);
  const firestore = firebase.firestore();
  const auth = firebase.auth();

  export{
    firebase, firestore, auth, app
  }