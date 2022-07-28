import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NewproductService } from '../service/newproduct.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addnewproduct',
  templateUrl: './addnewproduct.component.html',
  styleUrls: ['./addnewproduct.component.css']
})
export class AddnewproductComponent implements OnInit {
  constructor(private product: NewproductService, private router: Router) { }
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
    this.product.saveProductData(this.addProduct.value).subscribe((res)=>{
     // console.log(res);
     alert("Added successfull")
     this.addProduct.reset();
     this.router.navigate(['dashlogin/dash']);
    },err=>{
      alert("Somethings went wrong ")
    })
  }
 
  
}
