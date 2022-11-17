import firebase from 'firebase/compat/app'
import "firebase/compat/auth";
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDESl1cGkuAyq8Uq-OANunZMpGUQ1zpPFA",
    authDomain: "netflix-dualface.firebaseapp.com",
    projectId: "netflix-dualface",
    storageBucket: "netflix-dualface.appspot.com",
    messagingSenderId: "867652261959",
    appId: "1:867652261959:web:25d94434b9994dd5127962"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db; 

