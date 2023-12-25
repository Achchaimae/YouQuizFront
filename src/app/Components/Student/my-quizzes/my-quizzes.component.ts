import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AssignQuiz } from 'src/app/Core/Models/AssignQuiz.model';
import { AssignQuizService } from 'src/app/Core/Services/assign-quiz.service';
import { NotificationService } from 'src/app/Core/Services/notification.service';

@Component({
  selector: 'app-my-quizzes',
  templateUrl: './my-quizzes.component.html',
  styleUrls: ['./my-quizzes.component.css']
})
export class MyQuizzesComponent {
  constructor(private assignQuizSercice : AssignQuizService,
    private notificationService: NotificationService ,
    private router: Router
     ){};
  
  ngOnInit(){
    this.getStudentAssignment(102);
    
  }
  Assignement : AssignQuiz[]= [];
  getStudentAssignment(id: any) {
    this.assignQuizSercice.getAssigned(id).subscribe(
      data => {
        this.Assignement = data;
  
        const hasNewAssignment = this.hasNewAssignmentToday(data);
  
        if (hasNewAssignment) {
          this.notificationService.notifyNewAssignment();
          console.log("Hello");
        }
  
        console.log(data);
      }
    );
  }
  
  
  hasNewAssignmentToday(assignments: AssignQuiz[]): boolean {
    // Get the current date
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0); 
  
    return assignments.some(assignment => {
      const startDate = new Date(assignment.startDate);
      startDate.setHours(0, 0, 0, 0);
  
      return startDate.getTime() === currentDate.getTime();
    });
  }
  
  navigateToPassQuiz(quizId: any) {
    // Navigate to the 'passQuiz' component with the quiz ID
    this.router.navigate(['/passQuiz', quizId]);
  } 


}
