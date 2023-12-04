import { Component, Input } from '@angular/core';
import { AnswerService } from 'src/app/Core/Services/answer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-answer-form',
  templateUrl: './update-answer-form.component.html',
  styleUrls: ['./update-answer-form.component.css']
})
export class UpdateAnswerFormComponent {
  constructor(private Answer : AnswerService){}
  
  @Input() id : number =0;
  data : any ={
    text : ''
  }
  update(){
    this.Answer.updateAnswer(this.id, this.data).subscribe();
    Swal.fire({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success"
    });
    this.ngOnInit
  }
  ngOnInit(): void{
    this.Answer.getAnswer(this.id).subscribe(
      (response: any) => {
        this.data.text = response.text
        console.log(response)
      }
    )
  }

}
