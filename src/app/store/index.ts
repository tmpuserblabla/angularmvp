import {
ActionReducerMap,
MetaReducer
} from '@ngrx/store';
import { environment } from '~/environments/environment';
import { StatePost, postReducer } from './post/post.reducer';
import { PostEffects } from './post/post.effects';


export interface State {
    post: StatePost;
}

export const reducers: ActionReducerMap<State> = {
    post: postReducer
};

export const effects = [
    PostEffects
];

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
