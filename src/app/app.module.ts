import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostModule } from '@/modules/post/post.module';
import { ApiModule } from '@/api/api.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '~/environments/environment';
import { reducers, metaReducers, effects } from '@/store';
import { EffectsModule } from '@ngrx/effects';
import { MaterialModule } from '@/modules/material/material.module';
import { CommonModule } from '@angular/common';
import { PostComponent } from '@/components/post/post.component';
import { CommentComponent } from '@/components/comment/comment.component';
import { StarRatingComponent } from '@/components/star-rating/star-rating.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    RoutingComponents,
    CommentComponent,
    StarRatingComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    PostModule,
    ApiModule,
    StoreModule.forRoot(reducers, {
        metaReducers,
        runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
        }
    }),
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
