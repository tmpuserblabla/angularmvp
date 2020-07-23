import { Component, OnInit } from '@angular/core';
import { ApiService } from '@/api/api.service';
import { Store, select } from '@ngrx/store';
import { State } from '@/store';
import { Observable, from } from 'rxjs';
import { StatePost } from '../store/post/post.reducer';
import { loadPosts } from '@/store/post/post.actions';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  posts$: Observable<StatePost[]>;

  constructor(
    private api: ApiService,
    private store: Store<State>,
  ) { }

  ngOnInit(): void {
    this.store.dispatch(loadPosts());
  }

}
