import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NewproductService } from '../service/newproduct.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-editnewproduct',
  templateUrl: './editnewproduct.component.html',
  styleUrls: ['./editnewproduct.component.css']
})
export class EditnewproductComponent implements OnInit {

  constructor(private product: NewproductService,private router:Router, private router1: ActivatedRoute) { }
  editProduct = new FormGroup({
    title:new FormControl(''),
    price:new FormControl(''),
    description:new  FormControl(''),
    category: new  FormControl(''),
    image: new  FormControl('')
  })
  ngOnInit(): void {
    //console.log(this.router.snapshot.params.id);
    this.product.getProductById(this.router1.snapshot.params['id'], this.editProduct.value).subscribe((res: any) => {
      //console.log(res);
      this.editProduct = new FormGroup({
        title: new FormControl(res['title']),
        price: new FormControl(res['price']),
        description: new FormControl(res['description']),
        category: new FormControl(res['category']),
        image: new FormControl(res['image']),
      });
    });
  }
  UpdateData() {
    //console.log(this.editUser.value);
    this.product.updateProductData( this.router1.snapshot.params['id'],this.editProduct.value).subscribe((res: any) => {
      //console.log(res);
      alert("Updated successfull")
      this.editProduct.reset();
      this.router.navigate(['dashlogin/dash']);
    }, (err: any)=>{
      alert("Somethings went wrong ")
    })
  }
}

