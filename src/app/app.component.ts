import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  showPosts:boolean;
  constructor(){
    this.showPosts=false  
  }
  showp(){
   if( this.showPosts==true){
      this.showPosts=false
         }else{
            this.showPosts=true
         }
  }
}
