import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url='http://localhost:3000/products';
  constructor(private http:HttpClient) { }
  getProduct(){
    return this.http.get( this.url);
  }
  saveProductData(data:any){
    console.log(data); 
    return this.http.post(this.url,data);
  }
  deleteProduct(id:any){
    return this.http.delete(`${this.url}/${id}`)
  }
  getProductById(id:number,data:any ){
    return this.http.get(`${this.url}/${id}`)
  }
  updateProductData(id:number,data:any){
    return this.http.put(`${this.url}/${id}`,data)
  }
}