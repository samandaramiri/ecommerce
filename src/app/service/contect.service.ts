import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ContectService {
  url='http://localhost:3000/contect';
  constructor(private http:HttpClient) { }
  getContect(){
    return this.http.get( this.url);
  }
  saveContectData(data:any){
    console.log(data); 
    return this.http.post(this.url,data);
  }
  deleteContect(id:any){
    return this.http.delete(`${this.url}/${id}`)
  }
  getContectById(id:number,data:any ){
    return this.http.get(`${this.url}/${id}`)
  }
  updateContectData(id:number,data:any){
    return this.http.put(`${this.url}/${id}`,data)
  }
}