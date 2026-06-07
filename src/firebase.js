import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBw1U-hD4YG4iHlnjajVtlgwRk_aln5DNc",
  authDomain: "cxn-operating-system.firebaseapp.com",
  projectId: "cxn-operating-system",
  storageBucket: "cxn-operating-system.firebasestorage.app",
  messagingSenderId: "868728642948",
  appId: "1:868728642948:web:148e8f347fc248f66891d1",
  measurementId: "G-JZCEH9DT0J"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
