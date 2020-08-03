import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from '@/store';
import { Observable } from 'rxjs';
import { StatePost, RatingOfPost } from '@/store/post/post.reducer';
import { loadPosts, setRatingOfPostSuccess } from '@/store/post/post.actions';
import { map } from 'rxjs/operators';
import { selectPostsAsc, selectPostsDesc } from '@/store/post/post.selectors';

interface Sort {
  value: string;
  label: string;
}

@Component({
  selector: 'app-post-screen',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostScreenComponent implements OnInit {
  postState$: Observable<StatePost>;

  constructor(
    private store: Store<State>
  ) {
    this.postState$ = this.store.select('post');
  }

  sortList: Sort[] = [
    {value: 'ASC', label: 'New first'},
    {value: 'DESC', label: 'Old first'}
  ];

  selectedSortType: string = this.sortList[0].value;

  get posts$(): Observable<any[]> {
    if (this.selectedSortType === 'ASC') {
      return this.postState$.pipe(select(selectPostsAsc));
    } else {
      return this.postState$.pipe(select(selectPostsDesc));
    }
  }

  onRatingChanged({ postId, stars }: RatingOfPost): void {
    this.store.dispatch(setRatingOfPostSuccess({ postId, stars }));
  }

  ngOnInit(): void {
    this.store.dispatch(loadPosts());
  }

}
