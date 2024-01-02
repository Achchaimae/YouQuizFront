import { Component, Input, SimpleChanges } from '@angular/core';
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
// @Input() question_id:number =0;
@Input() question_id: number = 0;

  ngOnChanges(changes: SimpleChanges) {
    if ('question_id' in changes) {
      this.validationReq.question_id = this.question_id;
    }
  }
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

  ngOnInit(){
    this.getAnswers()
    this.getValidations(this.page)
    this.validationReq.question_id = this.question_id;
  }

  getAnswers()
  {
    this.AnswerService.getAllAnswers(0).subscribe(
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
        console.log(res);
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
