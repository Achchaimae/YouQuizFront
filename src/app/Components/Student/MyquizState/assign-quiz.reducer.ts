// assign-quiz.reducer.ts
import { createReducer, on, createSelector, createFeatureSelector } from '@ngrx/store';
import * as assignQuizActions from './assign-quiz.actions';
import { AssignQuiz } from 'src/app/Core/Models/AssignQuiz.model';

export interface AssignQuizState {
  assignments: AssignQuiz[];
  error: any;
}

export const initialState: AssignQuizState = {
  assignments: [],
  error: null,
};

// Selector to get the AssignQuizState from the store
export const getAssignQuizState = createFeatureSelector<AssignQuizState>('assignQuiz');

// Selector to get the assignments array from AssignQuizState
export const getAssignments = createSelector(
  getAssignQuizState,
  (state: AssignQuizState) => state.assignments
);

// Selector to get the error from AssignQuizState
export const getError = createSelector(
  getAssignQuizState,
  (state: AssignQuizState) => state.error
);

// Reducer to handle actions and update the state
export const assignQuizReducer = createReducer(
  initialState,
  on(assignQuizActions.loadAssignmentsSuccess, (state, { assignments }) => ({ ...state, assignments })),
  on(assignQuizActions.loadAssignmentsFailure, (state, { error }) => ({ ...state, error })),
);

// Export all selectors to be used in the component
export const AssignQuizSelectors = {
  getAssignQuizState,
  getAssignments,
  getError,
};
