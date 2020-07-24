import { createReducer, on } from '@ngrx/store';
import { loadPostsSuccess } from './post.actions';


export const postFeatureKey = 'post';

export interface Post {
  id: number;
}

export interface StatePost {
  posts: Post[];
}

export const initialState: StatePost = {
  posts: []
};


export const postReducer = createReducer(
  initialState,
  on(loadPostsSuccess, (state, { data }) => {
    return {
      ...state,
      posts: data
    };
  }),
);

