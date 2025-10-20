import { create } from "zustand";
import { QuizState, QuizAnswer } from "../types/quiz";

interface QuizStore extends QuizState {
  addAnswer: (answer: QuizAnswer) => void;
  nextQuestion: () => void;
  previousQuestion: () => void;
  completeQuiz: (archetype: string) => void;
  resetQuiz: () => void;
}

export const useQuizStore = create<QuizStore>((set) => ({
  answers: [],
  currentQuestion: 0,
  isComplete: false,
  resultArchetype: null,

  addAnswer: (answer) =>
    set((state) => ({
      answers: [...state.answers, answer]
    })),

  nextQuestion: () =>
    set((state) => ({
      currentQuestion: state.currentQuestion + 1
    })),

  previousQuestion: () =>
    set((state) => ({
      currentQuestion: Math.max(0, state.currentQuestion - 1)
    })),

  completeQuiz: (archetype) =>
    set({
      isComplete: true,
      resultArchetype: archetype
    }),

  resetQuiz: () =>
    set({
      answers: [],
      currentQuestion: 0,
      isComplete: false,
      resultArchetype: null
    })
}));