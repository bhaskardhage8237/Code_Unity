 import { Component } from '@angular/core';
   
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test';
  

  data = 'Hello';
  updateData = '';
  parentData(item:string){
    this.updateData = item;
  }

 }