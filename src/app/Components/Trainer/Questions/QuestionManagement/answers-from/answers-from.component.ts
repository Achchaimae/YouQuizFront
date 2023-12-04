import { Component, Input } from '@angular/core';
import { Answer } from 'src/app/Core/Models/Answer.model';
import { Question } from 'src/app/Core/Models/Question.model';
import { Validation } from 'src/app/Core/Models/Validation.model';
import { ValidationReq } from 'src/app/Core/Models/ValidationReq.model';
import { AnswerService } from 'src/app/Core/Services/answer.service';
import { ValidationService } from 'src/app/Core/Services/validation.service';

@Component({
  selector: 'app-answers-from',
  templateUrl: './answers-from.component.html',
  styleUrls: ['./answers-from.component.css']
})
export class AnswersFromComponent {
  totalPages: number = 0;
  Answers : Answer[] = [];
  validations: Validation[] = []; 
  page: number = 0;
  constructor (public AnswerService : AnswerService , public validationService : ValidationService ){}

// getAnswers(page:number){
//     this.AnswerService.getAnswers(page).subscribe(
//       data => {
//         this.Answers = data.content
//         this.totalPages = data.totalPages
//       }
//     )
//   }

ngOnInit(){
  this.getAnswers()
  this.getValidations(this.page)
}
@Input() question_id:number =0;
  question:Question={
    id: 0,
    text: '',
    type: '',
    subject: null,
    level: null,
    media: null,
    validations: []
  }

  validation:Validation={
    id: 0,
    correct: false,
    points: 0,
    answer: null,
  }

  validationReq:ValidationReq={
    id: 0,
    correct: false,
    points: 0,
    question_id: this.question_id,
    answer_id: 0
  }

  isShowAddForm : boolean = false;


  answers:Answer[]=[]

  getAnswers()
  {
    this.AnswerService.getAnswers(0).subscribe(
      res => this.answers = res.content
    )
  }

  chooseAnswer(answer:Answer)
  {
    this.validationReq.answer_id = answer.id;
    this.isShowAddForm = true;
  }

  getValidations(page: number) {
    this.validationService.getValidations(page).subscribe(
      data => {
        this.validations = data.content;
        this.totalPages = data.totalPages;
      }
    );
  }

  save()
  {
    this.validationService.saveValidation(this.validationReq).subscribe(
      res=> {
        this.question.validations.push(res)
        this.closeAddForm()
      }
    )
    this.ngOnInit()
  }
  closeAddForm()
  {
    this.isShowAddForm = false;
    this.ngOnInit()
  }
}
