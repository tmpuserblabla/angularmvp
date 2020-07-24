import { Component, OnInit } from '@angular/core';
import { ApiService } from '@/api/api.service';
import { Store } from '@ngrx/store';
import { State } from '@/store';
import { Observable } from 'rxjs';
import { StatePost } from '../store/post/post.reducer';
import { loadPosts } from '@/store/post/post.actions';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-post-screen',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostScreenComponent implements OnInit {
  postState$: Observable<StatePost>;
  posts$: Observable<any[]>;

  constructor(
    private api: ApiService,
    private store: Store<State>,
  ) {
    this.postState$ = this.store.select('post');
  }

  ngOnInit(): void {
    this.store.dispatch(loadPosts());

    this.posts$ =  this.postState$.pipe(map(({ posts }) => {
      return posts;
    }));
  }

}
