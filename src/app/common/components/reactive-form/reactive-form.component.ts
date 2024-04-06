import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  products:any[] = [];
  editMode:boolean = false;
  constructor(private http:HttpClient) { }

  ngOnInit(){
    this.getAll();
  }

  signupForm = new FormGroup({
    fName: new FormControl('',[Validators.required]),
    lName: new FormControl('',[Validators.required]),
    email: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}')]),
    comments: new FormControl('',[Validators.minLength(5)]),
    checkbox: new FormControl(''),
    
  })

  // post-API https://dummyjson.com/posts?skip=5&limit=10

  // getAll(){
  //   this.http.get('https://dummyjson.com/products').subscribe((res:any)=>{
  //     this.products = res;
  //     console.log(this.products);

  //   })
  // }

  getAll() {
    this.http.get('https://dummyjson.com/products').subscribe((res: any) => {
      this.products = res.products;
      console.log(this.products);
    });
  }
  
  userData(data:any){ 
    this.http.post('https://reqres.in/api/users', data).subscribe((res) =>{
      console.log(res)
    })
  }

 get fName(){
    return this.signupForm.get('fName');
  }

  get lName(){
    return this.signupForm.get('lName');
  }

 get email(){
    return this.signupForm.get('email')
  }

  get comments(){
    return this.signupForm.get('comments')
  }

  get checkbox(){
    return this.signupForm.get('checkbox')
  }

  // Add product

  productForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(''),
    discountPercentage: new FormControl(''),
    rating: new FormControl(''),
    stock: new FormControl(''),
    brand: new FormControl(''),
    category: new FormControl(''),
    thumbnail: new FormControl(''),
    images: new FormControl(''),
    
  })

  // addProduct(data:any){
  //   console.log('Add Product', data)
  //   this.http.post('https://dummyjson.com/posts?skip=5&limit=10', data).subscribe((res) =>{
  //     console.log('addProduct', res);
  //   })
  // }

  addProduct(data:any){
    console.log('Add Product', data)
    this.http.post('https://dummyjson.com/products', data).subscribe((res) =>{
      console.log('addProduct', res);
    })
  }

  deleteItem(id:number){
    this.http.delete(`https://dummyjson.com/products/${id}`).subscribe((res)=>{
      console.log('deleted item', res)
      this.products = this.products.filter(user => user.id !== id);
    })
  }

  updateProduct(id:number){
    this.editMode = true;
    let currentProduct = this.products.find((p)=>{return p.id === id});
    this.productForm.setValue({
    title: currentProduct.title,
    description: currentProduct.description,
    price: currentProduct.price,
    discountPercentage: currentProduct.discountPercentage,
    rating: currentProduct.rating,
    stock: currentProduct.stock,
    brand: currentProduct.brand,
    category: currentProduct.category,
    thumbnail: currentProduct.thumbnail,
    images: currentProduct.images,
    })
  }
  
}
