import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UsersService } from '../service/users.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

  constructor(private adduser: UsersService, private router:Router, private router1: ActivatedRoute) { }
  editUser = new FormGroup({
    fullname: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    mobile: new FormControl(''),
  })
  ngOnInit(): void {
    //console.log(this.router.snapshot.params.id);
    this.adduser.getUserById(this.router1.snapshot.params['id'], this.editUser.value).subscribe((res: any) => {
      //console.log(res);
      this.editUser = new FormGroup({
        fullname: new FormControl(res['fullname']),
        email: new FormControl(res['email']),
        password: new FormControl(res['password']),
        mobile: new FormControl(res['mobile']),
      });
    });
  }
  UpdateData() {
    //console.log(this.editUser.value);
    this.adduser.updateUserData( this.router1.snapshot.params['id'],this.editUser.value).subscribe((res: any) => {
      //console.log(res);
      alert("Updated successfull")
      this.editUser.reset();
      this.router.navigate(['dashlogin/dash']);
    }, (err: any)=>{
      alert("Somethings went wrong ")
    })
  }
}

