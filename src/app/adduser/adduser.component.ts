import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UsersService } from '../service/users.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  constructor(private adduser: UsersService, private router:Router) { }
  addUser=new FormGroup({
    fullname:new FormControl(''),
    email:new FormControl(''),
    password:new  FormControl(''),
    mobile: new  FormControl('')
  })
  message: boolean=false
  ngOnInit(): void {
  }
  SaveData() {
    //console.log(this.addUser.value);
    this.adduser.saveUserData(this.addUser.value).subscribe((res)=>{
     // console.log(res);
     alert("Added successfull")
     this.addUser.reset();
     this.router.navigate(['dashlogin/dash']);
    },err=>{
      alert("Somethings went wrong ")
    })
  }
 
  
}
