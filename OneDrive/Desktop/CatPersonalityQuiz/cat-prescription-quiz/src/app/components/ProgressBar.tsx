"use client";

import { useQuizStore } from "../hooks/useQuizState";
import { quizQuestions } from "../lib/quizData";

export default function ProgressBar() {
  const { currentQuestion } = useQuizStore();
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  return (
    <div className="w-full mb-8">
      <div className="flex justify-between mb-2">
        <span className="text-sm text-gray-600">
          Question {currentQuestion + 1} of {quizQuestions.length}
        </span>
        <span className="text-sm text-gray-600">{Math.round(progress)}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-purple-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}