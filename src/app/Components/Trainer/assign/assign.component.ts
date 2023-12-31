import { Component } from '@angular/core';
import { AssignQuizReq } from 'src/app/Core/Models/AssignQuizReq.model';
import { Quiz } from 'src/app/Core/Models/Quiz.model';
import { Student } from 'src/app/Core/Models/Student.model';
import { AssignQuizService } from 'src/app/Core/Services/assign-quiz.service';
import { AssignService } from 'src/app/Core/Services/assign.service';
import { QuizService } from 'src/app/Core/Services/quiz.service';
import { StudentService } from 'src/app/Core/Services/student.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-assign',
  templateUrl: './assign.component.html',
  styleUrls: ['./assign.component.css']
})
export class AssignComponent {
  constructor(public AssignService : AssignQuizService,public quizService: QuizService,public StudentService:StudentService){}

ngOnInit(){
  this.getQuizzes(this.page)
  this.getStudent(this.page)
}
Quizzes : Quiz[] =[];
Students : Student[] = [];
page: number = 0;
totalPages: number = 0;
assign : AssignQuizReq= {
  chance: 0,
  startDate: '',
  endDate: '',
  score: 0,
  result: 0,
  quiz_id: 0,
  student_id: 0
}
getQuizzes(page:number){
this.quizService.getQuizzes(page).subscribe(
  data => {
    this.Quizzes = data.content
    this.totalPages = data.totalPages
    // console.log(data.content);
    
  }
)
}

getStudent(page: number){
  this.StudentService.getStudents(page).subscribe(    
    data => {  
      this.Students = data.content;
      this.totalPages = data.totalPages;  
      // console.log(data.content);
    }
    
  )
}


// saveAssignement(){
//   console.log(this.assign);
//   this.AssignService.saveAssignement(this.assign).subscribe();
  
//   Swal.fire({
//     title: "Good job!",
//     text: "You clicked the button!",
//     icon: "success"
//   });
// }

saveAssignement() {
  this.AssignService.saveAssignement([this.assign]).subscribe(
    response => {
      // Handle the response
      Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
      });
    },
    error => {
      // Handle the error
      console.error(error);
    }
  );
  
}

}
