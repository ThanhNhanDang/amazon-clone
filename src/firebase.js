import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCLtgestLygS9Xn1cN4e4NiqjxzS3R9Zq4",
  authDomain: "clone-4e2cd.firebaseapp.com",
  projectId: "clone-4e2cd",
  storageBucket: "clone-4e2cd.appspot.com",
  messagingSenderId: "728149221245",
  appId: "1:728149221245:web:3eb58671e307993fe4f614",
  measurementId: "G-C8T2N806GV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
