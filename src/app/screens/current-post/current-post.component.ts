import { Component, OnInit } from '@angular/core';
import { State } from '@/store';
import { Post, RatingOfPost } from '@/store/post/post.reducer';
import { selectPostById } from '@/store/post/post.selectors';
import { loadPostById, setRatingOfPostSuccess } from '@/store/post/post.actions';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap, exhaustMap, map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Comment } from '@/store/comments/comments.reducer';
import { loadCommentsByPostId } from '@/store/comments/comments.actions';

@Component({
  selector: 'app-current-post',
  templateUrl: './current-post.component.html',
  styleUrls: ['./current-post.component.scss']
})
export class CurrentPostComponent implements OnInit {
  post$: Observable<Post>;
  comments$: Observable<Comment[]>;

  constructor(
    private store: Store<State>,
    private route: ActivatedRoute
  ) {}

  onRatingChanged({ postId, stars }: RatingOfPost): void {
    this.store.dispatch(setRatingOfPostSuccess({ postId, stars }));
  }

  ngOnInit(): void {
    this.post$ = this.route.params.pipe(exhaustMap(({ id }) => {
      const postId = Number(id);
      this.store.dispatch(loadCommentsByPostId({ postId }));

      return this.store.select('post').pipe(
        select(selectPostById, { postId }),
        tap(post => {
          if (!post) {
            this.store.dispatch(loadPostById({ postId }));
          }
        })
      );
    }));

    this.comments$ = this.store.select('comments')
      .pipe(map(({ comments }) => comments));
  }
}
