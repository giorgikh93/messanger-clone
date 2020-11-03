
import firebase from 'firebase'
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBxnusNH7QhR3k9Lr1k8xQAcopMtW-x16A",
    authDomain: "messenger-clone-52f0e.firebaseapp.com",
    databaseURL: "https://messenger-clone-52f0e.firebaseio.com",
    projectId: "messenger-clone-52f0e",
    storageBucket: "messenger-clone-52f0e.appspot.com",
    messagingSenderId: "351979857933",
    appId: "1:351979857933:web:e975df9603cf5eb9d0cd44",
    measurementId: "G-15H43BER01"
  });


  const db = firebaseApp.firestore()

  export default db