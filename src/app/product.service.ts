import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService{
  onClick: EventEmitter<any> = new EventEmitter<any>();

   constructor(private http:HttpClient) {
      
    }

   getAllProducts():Observable<any>{
    return this.http.get(`http://localhost:3002/getProducts`);
   }
 
   getProductById(prodId:any):Observable<any>{
     return this.http.get(`http://localhost:3002/getProducts/${prodId}`)
   }
}
