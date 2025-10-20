export interface QuizAnswer {
  questionId: number;
  selectedOption: string;
}

export interface ArchetypeScores {
  therapist: number;
  chaos: number;
  philosopher: number;
  social: number;
  zen: number;
  muse: number;
}

export interface Archetype {
  id: string;
  name: string;
  title: string;
  description: string;
  traits: string[];
  idealFor: string[];
  vibe: string;
  adoptionMotivation: string;
  color: string;
}

export interface ShelterCat {
  id: string;
  name: string;
  breed: string;
  age: string;
  description: string;
  imageUrl: string;
  shelterId: string;
  shelterName: string;
  shelterUrl: string;
  archetype: string;
}

export interface QuizState {
  answers: QuizAnswer[];
  currentQuestion: number;
  isComplete: boolean;
  resultArchetype: string | null;
}