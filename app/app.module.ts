import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DataTableModule } from "angular2-datatable";

import { AppComponent } from './app.component';
import { CommentsList } from './comments-list/comments-list';
import { InputCommentsForm } from './input-form/input-form';
import { CommentForm } from './comment-form/comment-form';
import { BlogService } from './service/service';

@NgModule({
  imports:[
    BrowserModule,
    FormsModule,
    HttpModule,
    DataTableModule
  ],
  declarations: [
    AppComponent,
    CommentsList,
    InputCommentsForm,
    CommentForm
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]

})
export class AppModule{}
