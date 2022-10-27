import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDmKkGRTnrd4AHU7AQQ-j3Hj4QUaao6cAg",
  authDomain: "music-world-358e7.firebaseapp.com",
  projectId: "music-world-358e7",
  storageBucket: "music-world-358e7.appspot.com",
  messagingSenderId: "551601941849",
  appId: "1:551601941849:web:1c9321d87e938343b9b048",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
