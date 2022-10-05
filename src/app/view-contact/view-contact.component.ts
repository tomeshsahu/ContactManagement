import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd } from '@angular/router';
import { HttpdataService } from '../SharedService/httpdata.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.scss']
})
export class ViewContactComponent implements OnInit {

  constructor(private route:ActivatedRoute,private http:HttpdataService) { }

  ContArray:any;
  ContactId:any;
  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('id'));
    this.ContactId=this.route.snapshot.paramMap.get('id');

    this.getcontbyid();
  }
  getcontbyid()
  {
    this.http.GetEmployeeById(this.ContactId).subscribe((res:any)=>{
      console.log(res);
      this.ContArray=res;
    })
  }

}
