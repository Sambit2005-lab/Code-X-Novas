import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

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
const db = getFirestore(app);

async function run() {
  const snap = await getDocs(collection(db, "careers"));
  snap.forEach(doc => {
    console.log(doc.id, "=>", doc.data());
  });
}

run().catch(console.error);
