import { Question } from "./Question.model";
import { QuestionReq } from "./QuestionReq.model";
import { QuizReq } from "./QuizReq.model";

export interface TempQuiz {
    id: number;
    duration : number ;
    quiz : QuizReq | null ;
    question : Question | null;
  }