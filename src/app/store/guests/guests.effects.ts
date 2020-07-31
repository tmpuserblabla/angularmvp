import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import * as guestsActions from './guests.actions';
import { GuestsService } from '@/services/guests/guests.service';
import { of } from 'rxjs';


@Injectable()
export class GuestsEffects {
  constructor(
    private actions$: Actions,
    private guestsService: GuestsService
  ) {}

  loadGuests$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(guestsActions.loadGuests),
      exhaustMap(() => {
        return this.guestsService.loadGuests().pipe(
          map((guests) => guestsActions.loadGuestsSuccess({ guests })),
          catchError(error => of(guestsActions.loadGuestsFailure({ error })))
        );
      })
    );
  });
}
