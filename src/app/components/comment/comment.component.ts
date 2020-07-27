import { Component, Input } from '@angular/core';
import { Comment } from '@/store/comments/comments.reducer';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {
  @Input() comment: Comment;
}
