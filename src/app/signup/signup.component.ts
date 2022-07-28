import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public signupForm !: FormGroup;
  constructor(private formBuiler: FormBuilder, private http: HttpClient, private router: Router) { }
  ngOnInit(): void {
    this.buildForm()
  }
  buildForm() {
    this.signupForm = this.formBuiler.group({
      fullname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      mobile: ['', Validators.required],
    })
  }
  signUp() {
    this.http.post<any>("http://localhost:3000/signup", this.signupForm.value)
      .subscribe(res => {
        alert("Signup successfull")
        this.signupForm.reset();
        this.router.navigate(['login']);
      }, err => {
        alert("Somethings went wrong ")
      })
  }
}