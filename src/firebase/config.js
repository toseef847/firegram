import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDVTpwyql4by1wwG-4SOCqIYU-sKwvUZT8",
    authDomain: "firegram-847.firebaseapp.com",
    databaseURL: "https://firegram-847.firebaseio.com",
    projectId: "firegram-847",
    storageBucket: "firegram-847.appspot.com",
    messagingSenderId: "872659937977",
    appId: "1:872659937977:web:7eeb06dd8e7213808dc968"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  // const projectDatabase = firebase.database();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp };