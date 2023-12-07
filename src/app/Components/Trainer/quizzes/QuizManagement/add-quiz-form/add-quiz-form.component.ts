import { Component } from '@angular/core';
import { QuizReq } from 'src/app/Core/Models/QuizReq.model';
import { QuizService } from 'src/app/Core/Services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiz-form',
  templateUrl: './add-quiz-form.component.html',
  styleUrls: ['./add-quiz-form.component.css']
})
export class AddQuizFormComponent {
  constructor(public quiz : QuizService){}
  step=1
  data :QuizReq ={
    id: 0,
    chances: '',
    comment: '',
    passScore: 0,
    trainer_id: 3,
    duration: '',
    tempQuizs_id: 0
  }
  // duration: string = '';
  invalidDuration: boolean = false;

  validateDuration(duration:any) :boolean {
    const regex = /^(?:[0-1][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/;
    return regex.test(duration);
  }
  save(){
    this.quiz.saveQuiz(this.data).subscribe(
      res => {
        this.data.id = res.id
        this.step +=1
      }
    );
    
    console.log("added with success");
    
  }

}
