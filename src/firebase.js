import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDT4rO5pSDQGToUz6dgIVEfIgrPwpY6_M8",
  authDomain: "ssmdssns.firebaseapp.com",
  projectId: "ssmdssns",
  storageBucket: "ssmdssns.appspot.com",
  messagingSenderId: "355573876684",
  appId: "1:355573876684:web:71f08b2f118a293ddc7f69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider };
export default db;
