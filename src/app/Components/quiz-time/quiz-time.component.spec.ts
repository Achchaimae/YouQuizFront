import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizTimeComponent } from './quiz-time.component';

describe('QuizTimeComponent', () => {
  let component: QuizTimeComponent;
  let fixture: ComponentFixture<QuizTimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizTimeComponent]
    });
    fixture = TestBed.createComponent(QuizTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
