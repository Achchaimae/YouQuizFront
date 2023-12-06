import { TempQuiz } from "./TempQuiz.model"
import { Trainer } from "./Trainer.model"

export interface Quiz {
    id:number
    chances : string
    comment : string
    duration : string
    passScore : number 
    trainer : Trainer | null
    tempQuizs : TempQuiz[]
}