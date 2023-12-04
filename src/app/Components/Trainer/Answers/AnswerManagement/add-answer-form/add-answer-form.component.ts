import { Component } from '@angular/core';
import { AnswerService } from 'src/app/Core/Services/answer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-answer-form',
  templateUrl: './add-answer-form.component.html',
  styleUrls: ['./add-answer-form.component.css']
})
export class AddAnswerFormComponent {

  data = {
    text : ''
  }
  constructor(public Answer : AnswerService ){}
  save(){
    this.Answer.saveAnswer(this.data).subscribe();
      this.data={
        text : ''
      }
      Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
      });
    
  }
}
