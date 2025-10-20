import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  serverTimestamp,
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import { db } from "./firebase";
import { ArchetypeScores } from "../types/quiz";

// Save quiz result
export async function saveQuizResult(
  archetype: string,
  scores: ArchetypeScores,
  email?: string,
  matchedCats?: Array<{ id: string; name: string; shelter: string }>
) {
  try {
    const docRef = await addDoc(collection(db, "quiz_results"), {
      archetype,
      scores,
      email: email || null,
      matchedCats: matchedCats || [],
      timestamp: serverTimestamp(),
      userAgent: typeof navigator !== "undefined" ? navigator.userAgent : null,
    });
    console.log("Quiz result saved:", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error saving quiz result:", error);
    throw error;
  }
}

// Get archetype data
export async function getArchetype(archetypeId: string) {
  try {
    const docRef = doc(db, "archetypes", archetypeId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log("No archetype found");
      return null;
    }
  } catch (error) {
    console.error("Error fetching archetype:", error);
    throw error;
  }
}

// Get all quiz questions from Firestore (optional)
export async function getQuizQuestions() {
  try {
    const querySnapshot = await getDocs(collection(db, "quiz_questions"));
    const questions = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return questions.sort((a, b) => a.questionNumber - b.questionNumber);
  } catch (error) {
    console.error("Error fetching questions:", error);
    throw error;
  }
}

// Get all results (for admin analytics)
export async function getAllResults() {
  try {
    const querySnapshot = await getDocs(collection(db, "quiz_results"));
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Error fetching results:", error);
    throw error;
  }
}

// Get results by archetype (for analytics)
export async function getResultsByArchetype(archetype: string) {
  try {
    const q = query(
      collection(db, "quiz_results"),
      where("archetype", "==", archetype)
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Error fetching results by archetype:", error);
    throw error;
  }
}

// Save favorite match
export async function saveFavoriteMatch(
  userId: string,
  archetypeName: string,
  matchedCats: Array<{ id: string; name: string; shelter: string }>
) {
  try {
    const userRef = doc(db, "saved_matches", userId);
    await updateDoc(userRef, {
      archetypeName,
      matchedCats,
      savedAt: serverTimestamp(),
    });
    console.log("Favorite saved");
  } catch (error) {
    console.error("Error saving favorite:", error);
    throw error;
  }
}