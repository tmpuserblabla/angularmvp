import { createReducer, on } from '@ngrx/store';
import { loadGuestsSuccess, addAuthorSuccess } from './guests.actions';


export const guestsFeatureKey = 'guests';

export interface Guest {
    id: number;
    name: string;
    email: string;
    avatar: string;
    message?: string;
    website?: string;
    username?: string;
    phone?: string;
}

export interface PayloadAddAuthor {
  name: string;
  email: string;
  message: string;
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
  on(addAuthorSuccess, (state, { guest }) => {
    console.log(guest);
    return {
      ...state,
      guests: [
        guest,
        ...state.guests,
      ]
    };
  })
);

