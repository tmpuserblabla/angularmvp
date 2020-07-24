import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PostComponent } from '@/post/post.component';
import { CurrentPostComponent } from '@/screens/current-post/current-post.component';

const routes: Routes = [
  { path: '', component: PostComponent },
  { path: 'post/:id', component: CurrentPostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
