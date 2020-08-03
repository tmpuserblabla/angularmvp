import { Injectable } from '@angular/core';
import { PostModule } from '@/modules/post/post.module';
import { ApiService } from '@/api/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: PostModule
})
export class PostService {
  constructor(private api: ApiService) { }

  loadPosts(): Observable<any> {
    return this.api.get('/posts?sort=desc');
  }

  loadPostById(postId: number): Observable<any> {
    return this.api.get(`/posts/${postId}`);
  }
}
