import { Component,Input } from '@angular/core';
import { CommentModel } from '../models/commentModel';

@Component({
    moduleId: module.id,
    selector: 'commentForm',
    templateUrl: 'comment-form.html',
    styleUrls: ['comment-form.css']
})
export class CommentForm  {
@Input() comments : CommentModel;

}
