import { Component, Input } from '@angular/core';
import { Question } from 'src/app/Core/Models/Question.model';
import { Quiz } from 'src/app/Core/Models/Quiz.model';
import { TempQuiz } from 'src/app/Core/Models/TempQuiz.model';
import { TempQuizReq } from 'src/app/Core/Models/TempQuizReq.model';
import { QuestionService } from 'src/app/Core/Services/question.service';
import { TempQuizService } from 'src/app/Core/Services/temp-quiz.service';

@Component({
  selector: 'app-questions-form',
  templateUrl: './questions-form.component.html',
  styleUrls: ['./questions-form.component.css']
})
export class QuestionsFormComponent {
  totalPages: number = 0;
  page: number = 0;
  Questions : Question[] =[];
  @Input() quiz_id:number =0 ;
  constructor (public QuestionService : QuestionService , public  TempQuizService : TempQuizService){}
  ngOnInit(){
    this.getQuestions()
    this.getTempQuiz(this.page)
    this.temQuizReq.quiz_id = this.quiz_id
    console.log(this.quiz_id);
    
  }
  quiz:Quiz={
    id: 0,
    chances: '',
    comment: '',
    duration: '',
    passScore: 0,
    trainer: null,
    tempQuizs: []
  }
  tempQuiz:TempQuiz={
    id: 0,
    duration: 0,
    quiz: null,
    question: null
  }
  temQuizReq : TempQuizReq={
    id: 0,
    duration: 0,
    question_id: 0,
    quiz_id: this.quiz_id
  }
  isShowAddForm : boolean = false;
  TempQuizes: TempQuiz[]=[]

  getQuestions(){
    this.QuestionService.getQuestions(0).subscribe(
      res => this.Questions = res.content
    )
  }

  chooseQuestion(question:Question){
    this.temQuizReq.question_id = question.id
    this.isShowAddForm = true
  }

  getTempQuiz(page:number){
    this.TempQuizService.getTempQuizzes(page).subscribe(
      data => {
        // console.log(data.content[0]);
        
        this.TempQuizes =data.content
        this.totalPages = data.totalPages
      }
    )
  }
  save(){
    this.TempQuizService.saveTempQuiz(this.temQuizReq).subscribe(
      res => {
        this.quiz.tempQuizs.push(res)
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
