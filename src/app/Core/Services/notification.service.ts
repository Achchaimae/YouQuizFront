import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private newAssignmentSubject = new BehaviorSubject<boolean>(false);

  get newAssignment$() {
    return this.newAssignmentSubject.asObservable();
  }

  notifyNewAssignment() {
    this.newAssignmentSubject.next(true);
  }
}
