import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  public productList: any;
  public filterCategory : any;
  public details: any;
  searchKey:string="";
  public searchTerm : string = '';
  constructor(private api : ApiService, private cartservice: CartService) { }

  ngOnInit(): void {
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
  this.cartservice.search.subscribe(val=>{
    this.searchKey=val;
  })
  }
  addtocart(item:any){
this.cartservice.addtoCart(item);
  }
  viewitem(item:any){
    this.details=(item.target as Selection);
     
        console.log(this.details);
    
    
  
  }
  search(event:any){
    this.searchTerm=(event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartservice.search.next(this.searchTerm);
  }
  filter(category:string){
    this.filterCategory = this.productList
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }
  
}
