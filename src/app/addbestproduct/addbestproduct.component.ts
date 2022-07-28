import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BestproductService } from '../service/bestproduct.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addbestproduct',
  templateUrl: './addbestproduct.component.html',
  styleUrls: ['./addbestproduct.component.css']
})
export class AddbestproductComponent implements OnInit {
  constructor(private product: BestproductService, private router: Router) { }
  addProduct=new FormGroup({
    title:new FormControl(''),
    price:new FormControl(''),
    description:new  FormControl(''),
    category: new  FormControl(''),
    image: new  FormControl('')
  })
  message: boolean=false
  ngOnInit(): void {
  }
  SaveData() {
    //console.log(this.addUser.value);
    this.product.saveBestProductData(this.addProduct.value).subscribe((res)=>{
     // console.log(res);
     alert("Added successfull")
     this.addProduct.reset();
     this.router.navigate(['dashlogin/dash']);
    },err=>{
      alert("Somethings went wrong ")
    })
  }
 
  
}
