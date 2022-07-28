import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BestproductService } from '../service/bestproduct.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-editbestproduct',
  templateUrl: './editbestproduct.component.html',
  styleUrls: ['./editbestproduct.component.css']
})
export class EditbestproductComponent implements OnInit {

  constructor(private product: BestproductService,private router:Router, private router1: ActivatedRoute) { }
  editbestproduct = new FormGroup({
    title:new FormControl(''),
    price:new FormControl(''),
    description:new  FormControl(''),
    category: new  FormControl(''),
    image: new  FormControl('')
  })
  ngOnInit(): void {
    //console.log(this.router.snapshot.params.id);
    this.product.getBestProductById(this.router1.snapshot.params['id'], this.editbestproduct.value).subscribe((res: any) => {
      //console.log(res);
      this.editbestproduct = new FormGroup({
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
    this.product.updateBestProductData( this.router1.snapshot.params['id'],this.editbestproduct.value).subscribe((res: any) => {
      //console.log(res);
      alert("Updated successfull")
      this.editbestproduct.reset();
      this.router.navigate(['dashlogin/dash']);
    }, (err: any)=>{
      alert("Somethings went wrong ")
    })
  }
}

