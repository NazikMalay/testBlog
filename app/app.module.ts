import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CommentsList } from './comments-list/comments-list';
import { InputCommentsForm } from './input-form/input-form';
import { CommentForm } from './comment-form/comment-form';

@NgModule({
  imports:[
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    CommentsList,
    InputCommentsForm,
    CommentForm
  ],
  bootstrap: [AppComponent]

})
export class AppModule{}
