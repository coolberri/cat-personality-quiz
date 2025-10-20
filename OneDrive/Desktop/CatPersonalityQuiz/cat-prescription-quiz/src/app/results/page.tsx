"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useQuizStore } from "../hooks/useQuizState";
import { ResultCard } from "../components/ResultCard";
import { motion } from "framer-motion";
import axios from "axios";

interface CatResult {
  id: string;
  name: string;
  breed: string;
  description: string;
  photos: Array<{ medium: string }>;
  url: string;
  contact: {
    email: string;
  };
}

export default function ResultsPage() {
  const router = useRouter();
  const { resultArchetype, resetQuiz } = useQuizStore();
  const [shelterCats, setShelterCats] = useState<CatResult[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!resultArchetype) {
      router.push("/quiz");
      return;
    }

    // Fetch cats from Petfinder API
    const fetchCats = async () => {
      try {
        // This is a simplified example - you'll need to implement proper auth
        const response = await axios.get("/api/petfinder/cats");
        setShelterCats(response.data.slice(0, 5));
      } catch (error) {
        console.error("Error fetching cats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCats();
  }, [resultArchetype, router]);

  if (!resultArchetype) return null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 p-4">
      <div className="max-w-3xl mx-auto pt-8">
        <ResultCard archetypeId={resultArchetype} />

        <h2 className="text-3xl font-bold mb-6">Meet Your Prescription 🐱</h2>

        {loading ? (
          <div className="text-center py-8">
            <p>Searching for your perfect match...</p>
          </div>
        ) : (
          <div className="space-y-4 mb-8">
            {shelterCats.map((cat) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="border rounded-lg p-4 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold">{cat.name}</h3>
                <p className="text-gray-600 mb-2">{cat.breed}</p>
                <p className="mb-4">{cat.description}</p>
                <a
                  href={cat.url}
                  target="_blank"
                  className="text-purple-500 hover:underline"
                >
                  View on Petfinder →
                </a>
              </motion.div>
            ))}
          </div>
        )}

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            resetQuiz();
            router.push("/");
          }}
          className="bg-purple-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-purple-600"
        >
          Get a Different Prescription
        </motion.button>
      </div>
    </div>
  );
}