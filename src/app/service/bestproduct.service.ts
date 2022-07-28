import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BestproductService {
  url='http://localhost:3000/bestproduct';
  constructor(private http:HttpClient) { }
  getBestProduct(){
    return this.http.get( this.url);
  }
  saveBestProductData(data:any){
    console.log(data); 
    return this.http.post(this.url,data);
  }
  deleteBestProduct(id:any){
    return this.http.delete(`${this.url}/${id}`)
  }
  getBestProductById(id:number,data:any ){
    return this.http.get(`${this.url}/${id}`)
  }
  updateBestProductData(id:number,data:any){
    return this.http.put(`${this.url}/${id}`,data)
  }
}