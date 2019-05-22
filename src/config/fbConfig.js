import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
  var config = {
    apiKey: "AIzaSyAeXaxDsg_ycEIXqTBasNLfC0ZpM2l1__s",
    authDomain: "recettes-ae3f8.firebaseapp.com",
    databaseURL: "https://recettes-ae3f8.firebaseio.com",
    projectId: "recettes-ae3f8",
    storageBucket: "recettes-ae3f8.appspot.com",
    messagingSenderId: "701197859077",
    appId: "1:701197859077:web:c4db27cc65a438de"
  };
  // Initialize Firebase

firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshops:true});

export default firebase;
