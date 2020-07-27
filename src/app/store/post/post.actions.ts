import { createAction, props } from '@ngrx/store';
import { Post } from './post.reducer';

export const loadPosts = createAction(
  '[Post] Load Posts'
);

export const loadPostsSuccess = createAction(
  '[Post] Load Posts Success',
  props<{ data: any[] }>()
);

export const loadPostsFailure = createAction(
  '[Post] Load Posts Failure',
  props<{ error: any }>()
);


export const loadPostById = createAction(
  '[Post] Load Post By Id',
  props<{ postId: number }>()
);

export const addPostByIdSuccess = createAction(
  '[Post] Load Post By Id Success',
  props<{ post: Post }>()
);
