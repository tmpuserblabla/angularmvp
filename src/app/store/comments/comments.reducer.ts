import { Action, createReducer, on } from '@ngrx/store';
import { loadCommentsByPostIdSuccess } from './comments.actions';


export const commentsFeatureKey = 'comments';

export interface Comment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

export interface StateComments {
  comments: Comment[];
}

export const initialState: StateComments = {
  comments: []
};


export const commentsReducer = createReducer(
  initialState,
  on(loadCommentsByPostIdSuccess, (state, { comments }) => {
    return {
      ...state,
      comments: [...state.comments, ...comments.filter((comment) => {
        return comments.some(({ id }) => id !== comment.id);
      })]
    };
  }),
);

