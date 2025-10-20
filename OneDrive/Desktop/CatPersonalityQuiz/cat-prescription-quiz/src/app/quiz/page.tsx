"use client";

import  QuizContainer  from "../components/QuizContainer";
import  ProgressBar  from "../components/ProgressBar";

export default function QuizPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 p-4">
      <div className="max-w-3xl mx-auto pt-8">
        <ProgressBar />
        <QuizContainer />
      </div>
    </div>
  );
}