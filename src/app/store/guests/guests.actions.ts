import { createAction, props } from '@ngrx/store';
import { Guest } from './guests.reducer';

export const loadGuests = createAction(
  '[Guests] Load Guests'
);

export const loadGuestsSuccess = createAction(
  '[Guests] Load Guests Success',
  props<{ guests: Guest[] }>()
);

export const loadGuestsFailure = createAction(
  '[Guests] Load Guests Failure',
  props<{ error: any }>()
);

export const addAuthor = createAction(
  '[Guests] Add Author',
  props<{ author: Guest }>()
);

export const addAuthorSuccess = createAction(
  '[Guests] Add Author Success',
  props<{ guests: Guest[] }>()
);

export const addAuthorFailure = createAction(
  '[Guests] Add Author Failure',
  props<{ error: any }>()
);
