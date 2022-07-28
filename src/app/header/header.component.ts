import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { ApiService } from '../service/api.service';
import { AuthserviceService } from '../authservice.service';
import { observable } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public totalItem: number= 0;
  public filterCategory : any;
  public productList: any;
  constructor(private api : ApiService, private cartservice: CartService, public _authservice:AuthserviceService) { }

  ngOnInit(): void {
    this.cartservice.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })

    this.api.getProduct()
    .subscribe(res=>{
      this.productList= res;
      this.filterCategory = res;
      this.productList.forEach((a:any)=>{
        if(a.category ==="women's collection"){
          a.category ="ladies"
        }
        Object.assign(a,{quantity:1,total:a.price});
      });
    });
  }
}
