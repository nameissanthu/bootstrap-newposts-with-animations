import { Component } from '@angular/core';
import {PostService } from './post.service';
@Component({
    selector:'post',
    template:`<div class="well">
    <img src="http://www.todaygh.com/wp-content/uploads/2017/01/title.png" height="40" width="70"><br>
    <label>Title</label><br>
    <input type="text" placeHolder="Enter Title" [(ngModel)]="title"><br>
     <img src="http://www.themacroscope.org/wp-content/uploads/2013/10/fig-1-war-and-peace.png" height="40" width="70"><br>
     <label>Body</label><br>
    <input type="text" placeHolder="Enter Body"[(ngModel)]="body"><br><br>

        <button (click)="addUserPosts()" class="btn btn-sm btn-primary">Add Posts</button>
        

         <ul>
         <li class="list-group-item list-group-item-success" *ngFor="let list of post; let i=index"><i class="glyphicon glyphicon-heart">
         <h3>{{list.title}} <button (click)="removepost(i)" class="btn btn-xs btn-danger"> <span class="glyphicon glyphicon-remove"></span></button></h3>
         <p>{{list.body}}</p>
        </i> </li>
         </ul>
    </div>
    
    
    
    
    `,
    providers:[PostService]

})


export class PostComponent{
post:any;
title:any;
body:any;
newPost:any;
constructor(private _postService:PostService){
  this.post=this._postService.getPost();
}
addUserPosts(newPost){
this.newPost={
    title:this.title,
    body:this.body
}
this._postService.serviceADD(this.newPost);
}
removepost(i){
this.post.splice(i,1)
}
}