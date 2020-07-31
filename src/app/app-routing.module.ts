import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostScreenComponent } from '@/post/post.component';
import { CurrentPostComponent } from '@/screens/current-post/current-post.component';
import { GuestBookComponent } from '@/screens/guest-book/guest-book.component';

const routes: Routes = [
  { path: '', component: PostScreenComponent },
  { path: 'post/:id', component: CurrentPostComponent },
  { path: 'guest-book', component: GuestBookComponent },
];

export const RoutingComponents = [
  PostScreenComponent,
  CurrentPostComponent,
  GuestBookComponent,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
