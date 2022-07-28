import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ForgetService {
  url = 'http://localhost:3000/forget';
  constructor(private http: HttpClient) { }
  getUsers() {
    return this.http.get(this.url);
  }
  deleteUser(id: any) {
    return this.http.delete(`${this.url}/${id}`)
  }
}
