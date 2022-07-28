import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  public contactForm !: FormGroup;
  constructor(private formBuiler: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.contactForm = this.formBuiler.group({
      fullname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      country: ['', Validators.required],
      detail: ['', Validators.required],
    })
  }
  contact() {
    this.http.post<any>("http://localhost:3000/contect", this.contactForm.value)
      .subscribe(res => {
        alert("saved successfull")
        this.contactForm.reset();
        this.router.navigate(['home']);
      }, err => {
        alert("Somethings went wrong ")
      })
  }
}

