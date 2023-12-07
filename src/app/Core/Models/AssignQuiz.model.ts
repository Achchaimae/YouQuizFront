import { Quiz } from "./Quiz.model"
import { QuizReq } from "./QuizReq.model"
import { Student } from "./Student.model"

export interface AssignQuiz {
    id:number
    chance : number
    startDate : Date
    endDate : Date
    score : number
    result : number
    quiz : Quiz | null
    // student : Student | null

}