export interface AssignQuizReq {
    // id:number
    chance : number
    startDate : Date|string
    endDate : Date|string
    score : number
    result : number
    quiz_id :number
    student_id :number
    
}