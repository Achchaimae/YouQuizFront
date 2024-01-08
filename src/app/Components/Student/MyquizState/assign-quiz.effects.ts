// assign-quiz.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import * as assignQuizActions from './assign-quiz.actions';
import { AssignQuizService } from 'src/app/Core/Services/assign-quiz.service';

@Injectable()
export class AssignQuizEffects {
  loadAssignments$ = createEffect(() => this.actions$.pipe(
    ofType(assignQuizActions.loadAssignments),
    mergeMap(() => this.assignQuizService.getAssigned(6)
      .pipe(
        map(assignments => assignQuizActions.loadAssignmentsSuccess({ assignments })),
        catchError(error => EMPTY)
      )
    )
  ));

  constructor(
    private actions$: Actions,
    private assignQuizService: AssignQuizService
  ) {}
}
