import { Component, OnInit } from '@angular/core';
import { UsersService } from '../service/users.service';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  constructor(private user: UsersService) { }
  usersData: any = [];
  ngOnInit(): void {
    this.list();
  }
  list() {
    this.user.getUsers().subscribe((allData) => {
      console.log(allData);
      this.usersData = allData;
    });
  }
  deleteUser(user_id: any) {
    console.log(user_id);
    this.user.deleteUser(user_id).subscribe((res) => {
      // console.log(res);
      this.ngOnInit
    });
  }

}