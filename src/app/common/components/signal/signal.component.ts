import { Component, EventEmitter, Input, Output } from '@angular/core';
import { single } from 'rxjs';

@Component({
  selector: 'app-signal',
  templateUrl: './signal.component.html',
  styleUrls: ['./signal.component.css']
})
export class SignalComponent {

  firstName = 'James';
  lastName = 'smith';
  fullName = this.firstName + ' ' + this.lastName;

  changeFirstName(fname:any){
    this.firstName = fname;
  }

  changeLastName(lname:any){
    this.lastName = lname;
  }

  // firstName = single('james');
  // lastName = single('smith');

 
  

}
