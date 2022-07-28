import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PaycashService {
  url='http://localhost:3000/paymentCOD';
  constructor(private http:HttpClient) { }
  getPayment(){
    return this.http.get( this.url);
  }

  deletePayment(id:any){
    return this.http.delete(`${this.url}/${id}`)
  }
  
}