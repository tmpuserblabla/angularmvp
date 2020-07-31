import {
ActionReducerMap,
MetaReducer
} from '@ngrx/store';
import { environment } from '~/environments/environment';
import { StatePost, postReducer } from './post/post.reducer';
import { StateComments, commentsReducer } from './comments/comments.reducer';
import { StateGuests, guestsReducer } from './guests/guests.reducer';
import { PostEffects } from './post/post.effects';
import { CommentsEffects } from './comments/comments.effects';
import { GuestsEffects } from './guests/guests.effects';


export interface State {
    post: StatePost;
    comments: StateComments;
    guests: StateGuests;
}

export const reducers: ActionReducerMap<State> = {
    post: postReducer,
    comments: commentsReducer,
    guests: guestsReducer
};

export const effects = [
    PostEffects,
    CommentsEffects,
    GuestsEffects
];

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
