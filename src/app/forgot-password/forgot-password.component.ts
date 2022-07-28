import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  public forgetForm !: FormGroup;
  constructor(private formBuiler: FormBuilder, private http: HttpClient, private router: Router) { }
  ngOnInit(): void {
    this.buildForm()
  }
  buildForm() {
    this.forgetForm = this.formBuiler.group({
      comment: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    })
  }
  Submit() {
    this.http.post<any>("http://localhost:3000/forget", this.forgetForm.value)
      .subscribe(res => {
        alert("Submit successfull")
        this.forgetForm.reset();
        this.router.navigate(['login']);
      }, err => {
        alert("Somethings went wrong ")
      })
  }
}