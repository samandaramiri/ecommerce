import { Component, OnInit } from '@angular/core';
import { NewproductService } from '../service/newproduct.service';
@Component({
  selector: 'app-newproductlist',
  templateUrl: './newproductlist.component.html',
  styleUrls: ['./newproductlist.component.css']
})
export class NewproductlistComponent implements OnInit {
  constructor(private product:NewproductService ) { }
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