import { Component, OnInit } from '@angular/core';
import { selectPostById } from '@/store/post/post.selectors';
import { Store, select } from '@ngrx/store';
import { ApiService } from '@/api/api.service';
import { State } from '@/store';
import { Post } from '@/store/post/post.reducer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-current-post',
  templateUrl: './current-post.component.html',
  styleUrls: ['./current-post.component.scss']
})
export class CurrentPostComponent implements OnInit {
  post$: Observable<Post>;

  constructor(
    private api: ApiService,
    private store: Store<State>,
  ) {
  }

  ngOnInit(): void {
    this.post$ = this.store.select('post').pipe(select(selectPostById, { postId: 2 }));
  }
}
