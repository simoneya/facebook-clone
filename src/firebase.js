
import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyAnLp288hi6s_xBJWqN73iMf-R2ju6ns6I",
    authDomain: "facebook-clone-ce951.firebaseapp.com",
    projectId: "facebook-clone-ce951",
    storageBucket: "facebook-clone-ce951.appspot.com",
    messagingSenderId: "173511495638",
    appId: "1:173511495638:web:deb98880778b4dd3155e77",
    measurementId: "G-TM98VJCLYB"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


  export { auth, provider };
  export default db;