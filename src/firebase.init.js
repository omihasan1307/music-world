import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDnQsiORM0ukX0k9eMeuyr7CjyowAhkNhY",
  authDomain: "music-world-af4a3.firebaseapp.com",
  projectId: "music-world-af4a3",
  storageBucket: "music-world-af4a3.appspot.com",
  messagingSenderId: "531176111972",
  appId: "1:531176111972:web:1023368aafb13e83a44471",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
