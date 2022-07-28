import { Component, OnInit } from '@angular/core';
import { PaystripeService } from '../service/paystripe.service';
@Component({
  selector: 'app-paystripelist',
  templateUrl: './paystripelist.component.html',
  styleUrls: ['./paystripelist.component.css']
})
export class PaystripelistComponent implements OnInit {
  constructor(private pay:PaystripeService ) { }
  payData: any =[];
  ngOnInit(): void {
    this.list();
  }
  list(){
    this.pay.getPayment().subscribe((allData)=>{
      console.log(allData);
      this.payData=allData;
    });
  }
  deleteProduct(product_id:any){
    console.log(product_id);
    this.pay.deletePayment(product_id).subscribe((res)=>{ 
     // console.log(res);
     this.ngOnInit
  } );
}
}