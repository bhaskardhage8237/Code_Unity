import { DatePipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { DateFormatPipe } from '../../pipes/date-format.pipe';
 
@Component({
  selector: 'app-twubric',
  templateUrl: './twubric.component.html',
  styleUrls: ['./twubric.component.css']
})
export class TwubricComponent {

  httph : HttpHeaders = new HttpHeaders().set("content-type", "Application/json")
  constructor(private http:HttpClient, private datePipe:DateFormatPipe) { }

  ngOnInit(){ 
    this.getAll();
   }

   userList:any[] = [];

  getAll() {
    this.http.get('https://gist.githubusercontent.com/pandemonia/21703a6a303e0487a73b2610c8db41ab/raw/82e3ef99cde5b6e313922a5ccce7f38e17f790ac/twubric.json')
      .subscribe((el: any) => {
        this.userList = el.map((user: User) => ({
          ...user,
          join_date: this.formatDate(user.join_date)
        }));
        console.log('userList', this.userList);
      });
  }

  private formatDate(date: number): string {
    const datePipe = new DatePipe('en-US');
    const formattedDate = datePipe.transform(new Date(date * 1000), 'MMM dd, yyyy');
    return formattedDate || '';
  }
  
  removeUser(userToRemove: any) {
    const index = this.userList.indexOf(userToRemove);
    if (index !== -1) {
      this.userList.splice(index, 1);
    }
  }

  startDate: string = '';  
  endDate: string = '';  
   sortKey: string = '';
  isAscending: boolean = true;

  sortGrid(sortKey: string) {
    
    const isAscending = this.sortKey === sortKey ? !this.isAscending : true;
  
    // Update current sortKey and sort order
    this.sortKey = sortKey;
    this.isAscending = isAscending;
  
    // Implement sorting logic
    this.userList.sort((a, b) => {
      const aValue = this.getPropertyValue(a, sortKey);
      const bValue = this.getPropertyValue(b, sortKey);
  
      if (aValue < bValue) {
        return isAscending ? -1 : 1;
      } else if (aValue > bValue) {
        return isAscending ? 1 : -1;
      } else {
        return 0;
      }
    });
    
  }
  
  // Helper function to get property value dynamically
  getPropertyValue(obj: any, key: string) {
    const keys = key.split('.');
    let value = obj;
  
    for (const k of keys) {
      value = value[k];
    }
  
    return value;
  }

  applyDateFilter() {
    // Check if both start date and end date are provided
    if (this.startDate && this.endDate) {
      const startTimestamp = new Date(this.startDate).getTime() / 1000;
      const endTimestamp = new Date(this.endDate).getTime() / 1000;

      // Apply date filter to userList
      this.userList = this.userList.filter((user: User) => {
        return user.join_date >= startTimestamp && user.join_date <= endTimestamp;
      });
    } else {
      // If either start date or end date is not provided, reset the userList to the original data
      this.getAll();
    }
     
  }
  
}

export interface User {
  uid: number;
  username: string;
  image: string;
  fullname: string;
  twubric: {
    total: number;
    friends: number;
    influence: number;
    chirpiness: number;
  };
  join_date: number;
}
