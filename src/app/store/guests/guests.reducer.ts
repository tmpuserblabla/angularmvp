import { createReducer, on } from '@ngrx/store';
import { loadGuestsSuccess } from './guests.actions';


export const guestsFeatureKey = 'guests';

export interface Guest {
    id: number;
    name: string;
    email: string;
    avatar: string;
    message?: string;
}

export interface StateGuests {
  guests: Guest[];
}

export const initialState: StateGuests = {
  guests: []
};


export const guestsReducer = createReducer(
  initialState,
  on(loadGuestsSuccess, (state, { guests }) => {
    return {
      ...state,
      guests
    };
  }),
);

