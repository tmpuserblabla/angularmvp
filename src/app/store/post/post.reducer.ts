import { createReducer, on } from '@ngrx/store';
import { loadPostsSuccess, addPostByIdSuccess } from './post.actions';


export const postFeatureKey = 'post';

export interface Post {
  id: number;
  title: string;
  body: string;
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
  on(addPostByIdSuccess, (state, { post }) => {
    return {
      ...state,
      posts: [...state.posts, post]
    };
  }),
);

