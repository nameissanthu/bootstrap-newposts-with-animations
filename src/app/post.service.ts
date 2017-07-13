import { Injectable} from '@angular/core';
@Injectable()


export class PostService{
posts:any;
constructor(){
  this.posts=[
      {
          title:'First Title of the Post',
          body:'This is the body of First Post'
      },
            {
          title:'Second Title of the Post',
          body:'This is the body of First Post'
      },
            {
          title:'Third Title of the Post',
          body:'This is the body of First Post'
      }
  ];
}
getPost(){
    return this.posts;
}
serviceADD(newPost){
  this.posts.push(newPost)
}
}