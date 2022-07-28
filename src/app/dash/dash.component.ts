import { Component, OnInit } from '@angular/core';
import { UsersService } from '../service/users.service';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { DashloginComponent } from '../dashlogin/dashlogin.component';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  constructor( ) { }
  usersData: any =[];
  ngOnInit(): void {
   
  }
 

}
