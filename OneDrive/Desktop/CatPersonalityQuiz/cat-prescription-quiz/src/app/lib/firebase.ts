import { initializeApp } from "firebase/app";
import { doc, getFirestore, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// 2) Import your archetypes object
import { archetypes } from "../lib/archetypes";

async function initializeArchetypes() {
  for (const [key, value] of Object.entries(archetypes)) {
    await setDoc(doc(db, "archetypes", key), value); // upsert
    console.log(`✔ wrote archetype: ${key}`);
  }
  console.log("✅ All archetypes seeded.");
}

initializeArchetypes().catch((e) => {
  console.error("Seeding failed:", e);
  process.exit(1);
});