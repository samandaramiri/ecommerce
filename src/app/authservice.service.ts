import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private http: HttpClient, private router: Router) { }
  logoutUser(){
    this.router.navigate(['login'])
  }
}
