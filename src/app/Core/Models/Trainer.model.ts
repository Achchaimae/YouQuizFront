import { EmailValidator } from "@angular/forms"

export interface Trainer {
    id:0
    firstName: string
    lastName:string
    dateOfBirth:Date
    address : string
    email : EmailValidator
    speciality : string
}