"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-2xl"
      >
        <h1 className="text-5xl font-bold mb-4">✨ Welcome to the Clinic ✨</h1>
        <p className="text-xl mb-4 text-gray-700">
          A mysterious establishment prescribes cats to those who need them most.
        </p>
        <p className="text-lg mb-8 text-gray-600">
          Answer a few quirky questions, discover your feline match, and meet adoptable cats from local shelters.
        </p>
        
        <Link href="/quiz">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-purple-500 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-purple-600 transition-colors"
          >
            Begin Your Prescription 🐱
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}