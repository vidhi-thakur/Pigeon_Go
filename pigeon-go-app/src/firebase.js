import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyCbTijLmKRvXLWwqh04SnkpFbR2QYU7iqw",
    authDomain: "pigeon-go.firebaseapp.com",
    projectId: "pigeon-go",
    storageBucket: "pigeon-go.appspot.com",
    messagingSenderId: "244366053886",
    appId: "1:244366053886:web:24c231f72136171327f0af"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider}
  export default db