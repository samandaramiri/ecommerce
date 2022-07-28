import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url = 'http://localhost:3000/signup';
  constructor(private http: HttpClient) { }
  getUsers() {
    return this.http.get(this.url);
  }
  saveUserData(data: any) {
    console.log(data);
    return this.http.post(this.url, data);
  }
  deleteUser(id: any) {
    return this.http.delete(`${this.url}/${id}`)
  }
  getUserById(id: number, data: any) {
    return this.http.get(`${this.url}/${id}`)
  }
  updateUserData(id: number, data: any) {
    return this.http.put(`${this.url}/${id}`, data)
  }
}
