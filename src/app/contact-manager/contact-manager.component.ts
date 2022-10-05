import { Component, OnInit } from '@angular/core';
import { HttpdataService } from '../SharedService/httpdata.service';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.scss']
})
export class ContactManagerComponent implements OnInit {

  constructor(private http:HttpdataService) { }
  ContArray:any;
  searchText:string='';
  ngOnInit(): void {
    this.getcontact();
    console.log(this.searchText);
  }

  getcontact()
  {
    return this.http.GetEmployee().subscribe((res:any)=>{
      console.log(res);
      this.ContArray=res; 
    })
  }

  contdelete(data:any)
  {
    console.log("Delete Id= ",data.id);
    return this.http.DeleteCont(data.id).subscribe((res:any)=>{
      console.log(res);
      this.getcontact();
    })
  }

}
