import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDsJaGDvxla7Xz6Zu-pKkGEL30GH2OpClU",
  authDomain: "chat-react-63249.firebaseapp.com",
  projectId: "chat-react-63249",
  storageBucket: "chat-react-63249.appspot.com",
  messagingSenderId: "329609463353",
  appId: "1:329609463353:web:63fa4072b058c75cd0efe8"
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };