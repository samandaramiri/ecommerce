import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CheckoutService } from '../service/checkout.service';
import { StripeModule } from 'stripe-angular';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { CartService } from '../service/cart.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  public products: any = [];
  public grandTotal !: number;
  public pro: any;
  public paycashForm !: FormGroup;
  title = 'angularstripeapp';
  success: boolean = false
  failure: boolean = false
  paymentHandler: any = null
  constructor(private cartservice: CartService, private checkout: CheckoutService, private formBuilder: FormBuilder, private http: HttpClient) { }
  ngOnInit(): void {
    this.paycashForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      apartment: ['', Validators.required],
      town: ['', Validators.required],
      district: ['', Validators.required],
      postcode: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      total: this.cartservice.getTotalPrice(),
      product: this.cartservice.getTotalItem(),
      check: ['', Validators.required]
    })
    this.invokeStripe();
    this.cartservice.getProducts()
      .subscribe(res => {
        this.products = res;
        this.grandTotal = this.cartservice.getTotalPrice();

      })
  }
  paycash() {
    this.http.post<any>("http://localhost:3000/paymentCOD", this.paycashForm.value)
      .subscribe(res => {
        alert("saved successfull")
        this.paycashForm.reset();
      }, err => {
        alert("Somethings went wrong ")
      })
  }
  paystipe() {
    this.http.post<any>("http://localhost:3000/paymentStipe", this.paycashForm.value)
      .subscribe(res => {
        alert("saved successfull")
        this.paycashForm.reset();
      }, err => {
        alert("Somethings went wrong ")
      })
  }
  makePayment(amount: number) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51KmCYsSCgQhTvJ2un3nOBJnBMTZCTGUBF8WRfVSWbJ9JhBaAHrdSBXm30toc8aLXdIUCIb4IfIkUfmWafEqlQ8oR00yyo8aOQo',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken)
        paymentStripe(stripeToken)
      },
    });
    const paymentStripe = (stripeToken: any) => {
      this.checkout.makePayment(stripeToken).subscribe((data: any) => {
        console.log(data);
        if (data.data === "success") {
          alert("payment successfull")
          this.success = true

        } else {
          alert("payment unsuccessfull")
          this.failure = true
        }
      });
    };
    paymentHandler.open({
      name: 'Stipe payment portal',
      description: 'Enter your card detail',
      amount: amount * this.grandTotal / 76,
    });
  }
  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51KmCYsSCgQhTvJ2un3nOBJnBMTZCTGUBF8WRfVSWbJ9JhBaAHrdSBXm30toc8aLXdIUCIb4IfIkUfmWafEqlQ8oR00yyo8aOQo',
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken);
          },
        });
      };
      window.document.body.appendChild(script);
    }
  }
}
