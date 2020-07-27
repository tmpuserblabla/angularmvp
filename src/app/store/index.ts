import {
ActionReducerMap,
MetaReducer
} from '@ngrx/store';
import { environment } from '~/environments/environment';
import { StatePost, postReducer } from './post/post.reducer';
import { StateComments, commentsReducer } from './comments/comments.reducer';
import { PostEffects } from './post/post.effects';
import { CommentsEffects } from './comments/comments.effects';


export interface State {
    post: StatePost;
    comments: StateComments;
}

export const reducers: ActionReducerMap<State> = {
    post: postReducer,
    comments: commentsReducer
};

export const effects = [
    PostEffects,
    CommentsEffects
];

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
