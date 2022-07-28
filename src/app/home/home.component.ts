import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { CartService } from '../service/cart.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public productList: any;
  public productList1: any;
  constructor(private api: ApiService, private cartservice: CartService) { }

  ngOnInit(): void {
    this.api.getProduct1()
      .subscribe(res => {
        this.productList = res;
        this.productList.forEach((a: any) => {
          Object.assign(a, { quantity: 1, total: a.price });
        })
      })

    this.api.getProduct2()
      .subscribe(res => {
        this.productList1 = res;
        this.productList1.forEach((a: any) => {
          Object.assign(a, { quantity: 1, total: a.price });
        })
      })
  }
  addtocart(item: any) {
    this.cartservice.addtoCart(item);
  }
  //Slider settings
  slideConfig = { "slidesToShow": 1, "slidesToScroll": 1 };
}