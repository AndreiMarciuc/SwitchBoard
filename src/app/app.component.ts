import { Component } from '@angular/core';
import { Button } from './button';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "Switchboard";
  button:Array<Button> = []

  constructor() {
      for(let i=0;i<10 ;i++){
      this.button.push(new Button(true,i))
    } 
    console.log(this.onClick)
  
  }
  onClick(index){
    console.log(index)
    if(this.button[index].value=="ON"){
      console.log("!!!!",this.button[index])
      this.button[index].value="OFF"
      
    }else if(this.button[index].value=="OFF"){
      console.log("^^^^^",this.button[index])
      this.button[index].value="ON"
    }
   
  }  
}

