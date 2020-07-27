import { Component, OnInit } from '@angular/core';
import { State } from '@/store';
import { Post } from '@/store/post/post.reducer';
import { selectPostById } from '@/store/post/post.selectors';
import { loadPostById } from '@/store/post/post.actions';
import { Store, select } from '@ngrx/store';
import { ApiService } from '@/api/api.service';
import { Observable } from 'rxjs';
import { tap, exhaustMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-current-post',
  templateUrl: './current-post.component.html',
  styleUrls: ['./current-post.component.scss']
})
export class CurrentPostComponent implements OnInit {
  post$: Observable<Post>;

  constructor(
    private store: Store<State>,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.post$ = this.route.params.pipe(exhaustMap(({ id }) => {
      const postId = Number(id);
      return this.store.select('post').pipe(
        select(selectPostById, { postId }),
        tap(post => {
          if (!post) {
            this.store.dispatch(loadPostById({ postId }));
          }
        })
      );
    }));
  }
}
