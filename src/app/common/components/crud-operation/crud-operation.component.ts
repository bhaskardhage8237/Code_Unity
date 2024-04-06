import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-crud-operation',
  templateUrl: './crud-operation.component.html',
  styleUrls: ['./crud-operation.component.css']
})
export class CrudOperationComponent {
  

  httph : HttpHeaders = new HttpHeaders().set("content-type", "Application/json")
constructor(private http:HttpClient, private https:HttpService) { }

userList:any[] = [];
@ViewChild('userPost')
signupForm!:NgForm

  ngOnInit(): void {
  this.getAll();
 }

   getAll(){
    this.http.get('https://reqres.in/api/users?page=1').subscribe((el:any)=>{
      this.userList = el.data
      console.log('userList', el)
    })
   }

  //  onSubmit(data:any){
  //   this.http.post('https://reqres.in/api/users', data).subscribe((result)=>{
  //     console.log("result", result)
  //     this.getAll();
  //   })
   
  // }

  onSubmit(data: any) {
    if (this.updatedUserId) {
      this.http.put(`https://reqres.in/api/users/${this.updatedUserId}`, data).subscribe((result) => {
        console.log("User updated successfully:", result);
        this.getAll();
      });
    } else {
      this.http.post('https://reqres.in/api/users', data).subscribe((result) => {
        console.log("New user added successfully:", result);
        this.getAll();
      });
    }
    this.signupForm.reset();
  }
  
  updatedUserId!:number;

  openUpdateModal(user: any) {
    // Populate the form fields with the user's details
    this.signupForm.setValue({
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      avatar: user.avatar
    });
  
    // Store the user ID to identify which user is being updated
    this.updatedUserId = user.id;
  }
  
  deleteUser(userId: number) {
    const url = `https://reqres.in/api/users/${userId}`;
    this.http.delete(url).subscribe(
      (response: any) => {
        console.log(`User with ID ${userId} deleted successfully`);
        // Update userList array locally by removing the deleted user
        this.userList = this.userList.filter(user => user.id !== userId);
      },
      (error: any) => {
        console.error(`Error deleting user with ID ${userId}:`, error);
      }
    );
  }

}
