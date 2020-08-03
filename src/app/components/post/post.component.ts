import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '@/store/post/post.reducer';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  @Input() post: Post;
  @Input() rating = 0;
  @Output() private ratingUpdated = new EventEmitter();

  starCount = 5;

  onRatingChanged(postId: number, rating: number): void {
    this.ratingUpdated.emit({ postId, stars: rating });
  }
}
