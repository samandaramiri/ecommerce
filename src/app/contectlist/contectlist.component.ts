import { Component, OnInit } from '@angular/core';
import { ContectService } from '../service/contect.service';
@Component({
  selector: 'app-contectlist',
  templateUrl: './contectlist.component.html',
  styleUrls: ['./contectlist.component.css']
})
export class ContectlistComponent implements OnInit {
  constructor(private contect:ContectService ) { }
  contectsData: any =[];
  ngOnInit(): void {
    this.list();
  }
  list(){
    this.contect.getContect().subscribe((allData)=>{
      console.log(allData);
      this.contectsData=allData;
    });
  }
  deleteContect(contect_id:any){
    console.log(contect_id);
    this.contect.deleteContect(contect_id).subscribe((res)=>{ 
     // console.log(res);
     this.ngOnInit
  } );
}
}