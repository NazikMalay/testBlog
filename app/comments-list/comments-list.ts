import { Component, OnInit } from '@angular/core';
import { BlogService } from '../service/service';
import { CommentModel } from '../models/commentModel';


@Component({
    moduleId: module.id,
    selector: 'commentsList',
    templateUrl: 'comments-list.html',
    styleUrls: ['comments-list.css']

})
export class CommentsList implements OnInit {
  commnts: CommentModel[];
constructor(private blogService : BlogService){
  this.commnts=[];
}
    ngOnInit() {
        this.commnts = this.blogService.getContent();
    }
}
