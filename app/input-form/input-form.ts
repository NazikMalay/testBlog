import { Component,Input } from '@angular/core';
import { CommentModel } from '../models/commentModel';
import { CommentsList } from '../comments-list/comments-list';


@Component({
    moduleId: module.id,
    selector: 'inputComments',
    templateUrl: 'input-form.html',
    styleUrls: ['input-form.css'],
    providers: [CommentsList]
})

export class InputCommentsForm {
  constructor(private commentlist: CommentsList){}
    newComment: CommentModel;
    message: string;
    displayName: string;
    comments: any;
    addTodo() {
        this.comments = JSON.parse(localStorage.getItem('comments'));
        this.newComment = new CommentModel(this.displayName, this.message, new Date());
        this.comments.push(this.newComment);
        localStorage.setItem('comments', JSON.stringify(this.comments));
        console.log('my New Comment ' + this.displayName + ' ' + this.message);
        console.log('my new comments list ' + this.comments);
        this.commentlist.commnts.push(this.newComment);
    }
}
