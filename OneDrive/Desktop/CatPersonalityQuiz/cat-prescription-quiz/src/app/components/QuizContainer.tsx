"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useQuizStore } from "../hooks/useQuizState";
import { quizQuestions } from "../lib/quizData";
import { calculateScores, getWinningArchetype } from "../lib/scoring";
import { motion } from "framer-motion";

export default function QuizContainer() {
  const router = useRouter();
  const { currentQuestion, addAnswer, completeQuiz } = useQuizStore();
  const question = quizQuestions[currentQuestion];

  const handleSelectOption = (scoring: string) => {
    addAnswer({ questionId: question.id, selectedOption: scoring });

    if (currentQuestion === quizQuestions.length - 1) {
      // Quiz complete - calculate result
      const store = useQuizStore.getState();
      const scores = calculateScores(store.answers);
      const winningArchetype = getWinningArchetype(scores);
      
      completeQuiz(winningArchetype);
      router.push("/results");
    } else {
      // Move to next question
      useQuizStore.setState({ currentQuestion: currentQuestion + 1 });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-2xl mx-auto p-6"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">
        {question.question}
      </h2>
      
      <div className="space-y-3">
        {question.options.map((option, idx) => (
          <motion.button
            key={idx}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleSelectOption(option.scoring)}
            className="w-full p-4 text-left border-2 border-purple-200 rounded-lg hover:bg-purple-50 transition-colors"
          >
            {option.text}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}