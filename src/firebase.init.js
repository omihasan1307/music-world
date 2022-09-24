import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyADX991V1bG-8QDRWIbchTAbK3GCOPdCjw",
  authDomain: "music-world-41d20.firebaseapp.com",
  projectId: "music-world-41d20",
  storageBucket: "music-world-41d20.appspot.com",
  messagingSenderId: "1006113892797",
  appId: "1:1006113892797:web:519cc1abcd898eaef08ad4",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
