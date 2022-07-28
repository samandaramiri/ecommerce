import { Component, OnInit } from '@angular/core';
import { BestproductService } from '../service/bestproduct.service';
@Component({
  selector: 'app-bestproductlist',
  templateUrl: './bestproductlist.component.html',
  styleUrls: ['./bestproductlist.component.css']
})
export class BestproductlistComponent implements OnInit {
  constructor(private product:BestproductService ) { }
  productsData: any =[];
  ngOnInit(): void {
    this.list();
  }
  list(){
    this.product.getBestProduct().subscribe((allData)=>{
      console.log(allData);
      this.productsData=allData;
    });
  }
  deleteProduct(product_id:any){
    console.log(product_id);
    this.product.deleteBestProduct(product_id).subscribe((res)=>{ 
     // console.log(res);
     this.ngOnInit
  } );
}
}