import { Component, OnInit } from '@angular/core';
import { DataComents } from '../shared/comments';
import { CommentModel } from '../models/commentModel';



@Component({
    moduleId: module.id,
    selector: 'commentsList',
    templateUrl: 'comments-list.html',
    styleUrls: ['comments-list.css']

})
export class CommentsList implements OnInit {
    constructor() {

    }
    Datacomment: any = DataComents;
    saved: any;
    commnts: any;
    ngOnInit() {
        this.saved = localStorage.getItem('comments');
        this.commnts = (localStorage.getItem('comments') !== null) ? JSON.parse(this.saved) : this.Datacomment;
        localStorage.setItem('comments', JSON.stringify(this.commnts));

    }

}
