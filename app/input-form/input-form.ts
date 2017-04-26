import { Component,Input } from '@angular/core';
import { CommentModel } from '../models/commentModel';
import { BlogService } from '../service/service';

@Component({
    moduleId: module.id,
    selector: 'inputComments',
    templateUrl: 'input-form.html',
    styleUrls: ['input-form.css']

})

export class InputCommentsForm {
  message: string;
  displayName: string;
  constructor(private blogService: BlogService){}
    addTodo() {
      this.blogService.addConntent(this.displayName,this.message);
    }
}
