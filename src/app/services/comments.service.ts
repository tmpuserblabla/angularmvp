import { Injectable } from '@angular/core';
import { ApiService } from '@/api/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  constructor(private api: ApiService) { }

  loadCommentsByPostId(postId: number): Observable<any> {
    return this.api.get(`/posts/${postId}/comments`);
  }
}
