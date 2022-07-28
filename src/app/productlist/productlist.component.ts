import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../service/products.service';
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  constructor(private product:ProductsService ) { }
  productsData: any =[];
  ngOnInit(): void {
    this.list();
  }
  list(){
    this.product.getProduct().subscribe((allData)=>{
      console.log(allData);
      this.productsData=allData;
    });
  }
  deleteProduct(product_id:any){
    console.log(product_id);
    this.product.deleteProduct(product_id).subscribe((res)=>{ 
     // console.log(res);
     this.ngOnInit
  } );
}
}