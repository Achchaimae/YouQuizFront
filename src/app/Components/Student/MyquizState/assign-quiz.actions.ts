
import { createAction, props } from '@ngrx/store';
import { AssignQuiz } from 'src/app/Core/Models/AssignQuiz.model';

export const loadAssignments = createAction('[My Quizzes Component] Load Assignments');
export const loadAssignmentsSuccess = createAction('[My Quizzes Component] Load Assignments Success', props<{ assignments: AssignQuiz[] }>());
export const loadAssignmentsFailure = createAction('[My Quizzes Component] Load Assignments Failure', props<{ error: any }>());
