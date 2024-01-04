import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagingStudentComponent } from './messaging-student.component';

describe('MessagingStudentComponent', () => {
  let component: MessagingStudentComponent;
  let fixture: ComponentFixture<MessagingStudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MessagingStudentComponent]
    });
    fixture = TestBed.createComponent(MessagingStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
