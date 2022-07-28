import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient,) { }
  getProduct() {
    return this.http.get<any>("http://localhost:3000/products")
      .pipe(map((res: any) => {
        return res;
      }))
  }

  getProduct1() {
    return this.http.get<any>("http://localhost:3000/newproduct")
      .pipe(map((res: any) => {
        return res;
      }))
  }
  getProduct2() {
    return this.http.get<any>("http://localhost:3000/bestproduct")
      .pipe(map((res: any) => {
        return res;
      }))
  }
}
