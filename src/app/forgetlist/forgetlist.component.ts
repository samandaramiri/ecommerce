import { Component, OnInit } from '@angular/core';
import { ForgetService } from '../forget.service';
@Component({
  selector: 'app-forgetlist',
  templateUrl: './forgetlist.component.html',
  styleUrls: ['./forgetlist.component.css']
})
export class ForgetlistComponent implements OnInit {
  constructor(private user: ForgetService) { }
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