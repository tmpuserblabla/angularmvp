import { createAction, props } from '@ngrx/store';
import { Comment } from './comments.reducer';

export const loadCommentsByPostId = createAction(
  '[Comments] Load Comments By Post Id',
  props<{ postId: number }>()
);

export const loadCommentsByPostIdSuccess = createAction(
  '[Comments] Load Comments By Post Id Success',
  props<{ comments: Comment[] }>()
);

export const loadCommentsByPostIdFailure = createAction(
  '[Comments] Load Comments By Post Id Failure',
  props<{ error: any }>()
);
