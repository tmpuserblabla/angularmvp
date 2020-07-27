import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import * as PostActions from './post.actions';
import { PostService } from '@/post/post.service';
import { of } from 'rxjs';



@Injectable()
export class PostEffects {
  constructor(
    private actions$: Actions,
    private postService: PostService
  ) {}

  loadPosts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PostActions.loadPosts),
      exhaustMap((_) => {
          return this.postService.loadPosts().pipe(
            map((data) => {
              return PostActions.loadPostsSuccess({ data });
            }),
            catchError(error => of(error))
          );
        }
      )
    );
  });

  loadPostById$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PostActions.loadPostById),
      exhaustMap((action) => {
          return this.postService.loadPostById(action.postId).pipe(
            map((post) => {
              return PostActions.addPostByIdSuccess({ post });
            }),
            catchError(error => of(error))
          );
        }
      )
    );
  });

}
