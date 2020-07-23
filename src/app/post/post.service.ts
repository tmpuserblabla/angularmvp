import { Injectable } from '@angular/core';
import { PostModule } from './post.module';
import { ApiService } from '../api/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: PostModule
})
export class PostService {
  constructor(private api: ApiService) { }

  loadPosts(): Observable<any> {
    return this.api.get('/posts');
  }
}
