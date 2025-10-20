"use client";

import { archetypes } from "../lib/archetypes";
import { motion } from "framer-motion";

interface ResultCardProps {
  archetypeId: string;
}

export function ResultCard({ archetypeId }: ResultCardProps) {
  const archetype = archetypes[archetypeId];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`${archetype.color} rounded-lg p-8 mb-8`}
    >
      <h2 className="text-4xl font-bold mb-2">{archetype.name}</h2>
      <p className="text-lg italic mb-6 text-gray-700">{archetype.title}</p>
      
      <div className="mb-6">
        <h3 className="font-bold mb-2">Your Vibe:</h3>
        <p>{archetype.vibe}</p>
      </div>

      <div className="mb-6">
        <h3 className="font-bold mb-2">Traits:</h3>
        <div className="flex flex-wrap gap-2">
          {archetype.traits.map(trait => (
            <span key={trait} className="bg-white px-3 py-1 rounded-full text-sm">
              {trait}
            </span>
          ))}
        </div>
      </div>

      <p className="text-lg italic">{archetype.adoptionMotivation}</p>
    </motion.div>
  );
}