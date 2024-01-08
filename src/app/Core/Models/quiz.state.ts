import { Quiz } from "./Quiz.model";

export interface QuizState {
  quiz: Quiz;
  currentQuestionIndex: number;
  score: number;
  validationIds: number[];
  restOfTime: number;
}