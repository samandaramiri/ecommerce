import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from './authservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  constructor(public router: Router, ){}
  title = 'angularshop';

}