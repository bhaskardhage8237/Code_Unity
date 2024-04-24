import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  // baseurl = "http://localhost:3000/";
  baseurl = "https://reqres.in/api/users?page=1";
  Httph : HttpHeaders = new HttpHeaders()
                        .set("content-type","Application/json")
  constructor(private http:HttpClient) { }


  getDataFromServer(){
    const url = this.baseurl;
    return this.http.get(url, {"headers": this.Httph})
  }

  
  postDataFromServer(endPoint:string, body:any){
    const url = this.baseurl + endPoint;
    return this.http.post(url, body,{"headers": this.Httph})
  }

  putDataFromServer(endPoint:string, body:any){
    const url = this.baseurl + endPoint;
    return this.http.put(url, body,{"headers": this.Httph});
  }

  // deleteDataFromServer(endPoint:string, body:any){
  //   const url = this.baseurl + endPoint;
  //   return this.http.delete(url, body,{"headers": this.Httph})
  // }


  deleteDataFromServer(endPoint:any){
    const url = this.baseurl + endPoint;
    return this.http.delete(url,{ headers: this.Httph })
  }

getAll(){
  return new Promise((resolve, reject) => {
    firstValueFrom(
      this.http.get(
         '----------API----------'
      )
    ).then(
      (res) => {
        resolve(res);
      },
      (msg) => {
        reject(msg);
      }
    );
  });
}


 updateProduct(id:string, value:any){
  this.http.put(`https://jsonplaceholder.typicode.com/posts/${id}`, value).subscribe();
 }

 


hello(){}







}
