import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-tepmlate-form',
  templateUrl: './tepmlate-form.component.html',
  styleUrls: ['./tepmlate-form.component.css']
})
export class TepmlateFormComponent implements OnInit{


  allItem:any = [];
  editMode:boolean = false;
  constructor(private http:HttpClient, private https:HttpService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((item:any)=>{
      this.allItem = item;
      console.log('item', this.allItem);
    })
  }

  postForm = new FormGroup({
    title: new FormControl(''),
    body: new FormControl('')
  })

  addForm(data:any){
    this.editMode = false;
    this.http.post('https://jsonplaceholder.typicode.com/posts', data).subscribe((res)=>{
      console.log(res);
    })
  }

  updateItem(id:any){
    let currentProduct = this.allItem.find((p:any)=>{return p.id === id});
    this.postForm.setValue({
      title:  currentProduct.title,
      body: currentProduct.body
    })
     this.editMode = true;

  }

  deleteItem(id:number){
     this.http.delete(`https://jsonplaceholder.typicode.com/posts/${id}`).subscribe((item)=>{
      console.log('deleted item', item);
      this.allItem = this.allItem.filter((user:any) => user.id !== id);
    })
  }






}
