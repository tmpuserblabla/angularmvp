import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostScreenComponent } from '@/post/post.component';
import { CurrentPostComponent } from '@/screens/current-post/current-post.component';

const routes: Routes = [
  { path: '', component: PostScreenComponent },
  { path: 'post/:id', component: CurrentPostComponent },
];

export const RoutingComponents = [PostScreenComponent, CurrentPostComponent];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
