import { QuizReq } from "./QuizReq.model"
import { Student } from "./Student.model"

export interface AssignQuizReq {
    id:number
    chance : number
    startDate : Date
    endDate : Date
    score : number
    result : number
    quiz_id :number
    // student_id :number
    
}