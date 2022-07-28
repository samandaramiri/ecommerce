import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-productsingle',
  templateUrl: './productsingle.component.html',
  styleUrls: ['./productsingle.component.css']
})
export class ProductsingleComponent implements OnInit {
  public product:any=[];


  constructor(private cartservice: CartService) { }

  ngOnInit(): void {
    this.cartservice.getProducts()
    .subscribe(res=>{
      this.product=res;
      
    })
    
  }
  addtocart(item:any){
    this.cartservice.addtoCart(item);
      }
}
