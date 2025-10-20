import { QuizAnswer, ArchetypeScores } from "../types/quiz";

export function calculateScores(answers: QuizAnswer[]): ArchetypeScores {
  const scores: ArchetypeScores = {
    therapist: 0,
    chaos: 0,
    philosopher: 0,
    social: 0,
    zen: 0,
    muse: 0
  };

  answers.forEach(answer => {
    const scoring = answer.selectedOption as keyof ArchetypeScores;
    if (scoring in scores) {
      scores[scoring]++;
    }
  });

  return scores;
}

export function getWinningArchetype(scores: ArchetypeScores): string {
  return Object.entries(scores).reduce((a, b) => 
    b[1] > a[1] ? b : a
  )[0];
}