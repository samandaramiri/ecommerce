import { Component, OnInit } from '@angular/core';
import { PaycashService } from '../service/paycash.service';
@Component({
  selector: 'app-paycashlist',
  templateUrl: './paycashlist.component.html',
  styleUrls: ['./paycashlist.component.css']
})
export class PaycashlistComponent implements OnInit {
  constructor(private pay:PaycashService ) { }
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