import { Component } from '@angular/core';
import { NotificationService } from 'src/app/Core/Services/notification.service';

@Component({
  selector: 'app-student-navbar',
  templateUrl: './student-navbar.component.html',
  styleUrls: ['./student-navbar.component.css']
})
export class StudentNavbarComponent {
  hasNewAssignment: boolean = false;

  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
    this.notificationService.newAssignment$.subscribe(hasNewAssignment => {
      this.hasNewAssignment = hasNewAssignment;
    });
  }

}
