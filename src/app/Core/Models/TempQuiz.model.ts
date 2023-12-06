import { QuestionReq } from "./QuestionReq.model";
import { QuizReq } from "./QuizReq.model";

export interface TempQuiz {
    id: number;
    duration : string ;
    quiz : QuizReq | null ;
    question : QuestionReq | null;
  }