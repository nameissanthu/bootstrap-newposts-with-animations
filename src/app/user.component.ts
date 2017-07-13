import { Component } from '@angular/core';
@Component({
    selector:'user',
    templateUrl:'./user.component.html'
    
    
})

export class UserComponent{
name:string;
email:string;
address:address;
hobbies:string[];
showHobbies:boolean;
showUser:boolean;
showEdit:boolean;
constructor(){
    this.name="Santhosh Kumar",
    this.email="nameissanthu@gmail.com",
    this.address={
        street:'BanjaraHills',
        city:'Hyderabad',
        country:'India'
    }
    this.hobbies=['music','movies','drinking'],
    this.showHobbies=false,
    this.showUser=false,
    this.showEdit=false
}
showHobby(){
    if(this.showHobbies==true)
    {
        this.showHobbies=false
    }else{
        this.showHobbies=true
    }
}
addHobby(hobby){
  this.hobbies.push(hobby)
}
delHobby(i){
this.hobbies.splice(i,1);
}
showUserdetails(){
    if(this.showUser==true){
        this.showUser=false
    }else {
        this.showUser=true
    }
}
showEdituser(){
    if(this.showEdit==true){
        this.showEdit=false
    }else{
        this.showEdit=true
    }
}
submitClick(){
    alert ('Database Not Connected / Server Lost')
}
}
interface address{
    street:string,
    city:string,
    country:string
}