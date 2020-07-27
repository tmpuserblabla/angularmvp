import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import * as commentsActions from './comments.actions';
import { CommentsService } from '@/services/comments.service';
import { of } from 'rxjs';


@Injectable()
export class CommentsEffects {
  constructor(
    private actions$: Actions,
    private commentsService: CommentsService
  ) {}

  loadCommentsByPostId$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(commentsActions.loadCommentsByPostId),
      exhaustMap((action) => {
        return this.commentsService.loadCommentsByPostId(action.postId).pipe(
          map((comments) => {
            return commentsActions.loadCommentsByPostIdSuccess({ comments });
          }),
          catchError(error => of(error))
        );
      })
    );
  });
}
