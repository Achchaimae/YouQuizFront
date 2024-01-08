import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AssignQuiz } from 'src/app/Core/Models/AssignQuiz.model';
import { AssignQuizService } from 'src/app/Core/Services/assign-quiz.service';
import { NotificationService } from 'src/app/Core/Services/notification.service';
import Swal from 'sweetalert2';
import { AssignQuizState, getAssignments } from '../MyquizState/assign-quiz.reducer';
import { Store } from '@ngrx/store';
import * as assignQuizActions from '../MyquizState/assign-quiz.actions'

@Component({
  selector: 'app-my-quizzes',
  templateUrl: './my-quizzes.component.html',
  styleUrls: ['./my-quizzes.component.css']
})
export class MyQuizzesComponent {
  constructor(private assignQuizSercice : AssignQuizService,
    private notificationService: NotificationService ,
    private router: Router ,
    private datePipe: DatePipe,
    private store: Store<AssignQuizState>
    
     ){};
  
  ngOnInit(){
    // this.getStudentAssignment(6);
    this.store.dispatch(assignQuizActions.loadAssignments());    
  }
  // Assignement : AssignQuiz[]= [];
  assignments$ = this.store.select(getAssignments); 


  getStudentAssignment(id: any) {
    this.assignQuizSercice.getAssigned(id).subscribe(
      data => {
        // Use assignments$ instead of Assignement
        const hasNewAssignment = this.hasNewAssignmentToday(data);

        if (hasNewAssignment) {
          this.notificationService.notifyNewAssignment();
        }
      }
    );
  }

  hasNewAssignmentToday(assignments: AssignQuiz[]): boolean {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    return assignments.some(assignment => {
      const startDate = new Date(assignment.startDate);
      startDate.setHours(0, 0, 0, 0);

      return startDate.getTime() === currentDate.getTime();
    });
  }

  navigateToPassQuiz(quizId: any) {
    this.assignments$.subscribe(assignments => {
      const selectedItem = assignments.find((item) => item.quiz?.id === quizId);
  
      if (selectedItem && this.isDateBetween(selectedItem)) {
        this.router.navigate(['/passQuiz', quizId]);
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Quiz Not Available',
          text: 'The current date is not valid for this quiz.'
        });
      }
    });
  }
  

  isDateBetween(item: { startDate: Date; endDate: Date }): boolean {
    const currentDate = new Date();
    const formattedCurrentDate = this.datePipe.transform(currentDate, 'yyyy-MM-dd') || '';

    const formattedStartDate = this.datePipe.transform(item.startDate, 'yyyy-MM-dd') || '';
    const formattedEndDate = this.datePipe.transform(item.endDate, 'yyyy-MM-dd') || '';

    return formattedCurrentDate >= formattedStartDate && formattedCurrentDate <= formattedEndDate;
  }
}
