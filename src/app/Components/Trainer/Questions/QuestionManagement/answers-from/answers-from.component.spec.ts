import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswersFromComponent } from './answers-from.component';

describe('AnswersFromComponent', () => {
  let component: AnswersFromComponent;
  let fixture: ComponentFixture<AnswersFromComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnswersFromComponent]
    });
    fixture = TestBed.createComponent(AnswersFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
