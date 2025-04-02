
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyATboHOBK3qKtwyVlfljWWPL3XTzTPZp_o",
  authDomain: "gossiedb.firebaseapp.com",
  projectId: "gossiedb",
  storageBucket: "gossiedb.firebasestorage.app",
  messagingSenderId: "198187466451",
  appId: "1:198187466451:web:9f7cb1e9d6da067e931e26",
  measurementId: "G-GM0NXFYL5X"
};


const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };