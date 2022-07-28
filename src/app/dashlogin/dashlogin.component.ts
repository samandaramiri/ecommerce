import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-dashlogin',
  templateUrl: './dashlogin.component.html',
  styleUrls: ['./dashlogin.component.css']
})
export class DashloginComponent implements OnInit {
  model: any = {}
  public loginForm !: FormGroup
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  login() {
    this.http.get<any>("http://localhost:3000/dashsignup")
      .subscribe(res => {
        const user = res.find((a: any) => {
          return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
        });
        if (user) {
          alert("Login Success");
          this.loginForm.reset();
          this.router.navigate(['/dashlogin/dash']);

        } else {
          alert("Email or password is inputed wrong");
        }
      }, err => {
        alert("something went wrong")
      })
  }
}