
import { Level } from "./Level.model"
import { Media } from "./Media.model"
import { SubjectReq } from "./SubjectReq.modul"
import { Validation } from "./Validation.model"

export interface Question {
    id: 0
    text: ""
    type: "multiChoice" | "singleChoice" | "direct" | ""
    subject: SubjectReq |null
    level:Level|null
    media: Media|null
    validations: Validation[]
}