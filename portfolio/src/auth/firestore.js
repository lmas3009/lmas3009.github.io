import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAdnOona-RQOWWcbCT4zVrO4LJrMeRWEGc",
    authDomain: "getsma.firebaseapp.com",
    databaseURL: "https://getsma-default-rtdb.firebaseio.com",
    projectId: "getsma",
    storageBucket: "getsma.appspot.com",
    messagingSenderId: "300928874824",
    appId: "1:300928874824:web:508c58dd17423622dd5b7d",
    measurementId: "1:300928874824:web:508c58dd17423622dd5b7d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;