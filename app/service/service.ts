import { Injectable } from '@angular/core';
import { DataComents } from '../shared/comments';
import { CommentModel } from '../models/commentModel';


@Injectable()
export class BlogService {
    Datacomment: any = DataComents;
    saved: any;
    commnts: CommentModel[];
    newComment: CommentModel;

    // constructor(private localStorage: localStorage){}

    getContent() {
        this.saved = localStorage.getItem('comments');
        this.commnts = (localStorage.getItem('comments') !== null) ? JSON.parse(this.saved) : this.Datacomment;
        localStorage.setItem('comments', JSON.stringify(this.commnts));
        return this.commnts;
    }

    addConntent(displayName: string,message: string) {
        this.commnts = JSON.parse(localStorage.getItem('comments'));
        this.newComment = new CommentModel(displayName, message, new Date());
        this.commnts.push(this.newComment);
        localStorage.setItem('comments', JSON.stringify(this.commnts));
    }
}
