import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdateEmp } from '../contact-manager/UpdateEmp';
import { HttpdataService } from '../SharedService/httpdata.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent implements OnInit {

  constructor(private route:ActivatedRoute,private data:HttpdataService,private fb:FormBuilder,private router:Router) { }
  Group:any=['Family', 'Friends', 'Relative'];
  EmployeeModelObj: UpdateEmp =new UpdateEmp();
  UpdateArray:any;
  UpdateContId:any;
  GroupNameGet:any;

  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('id'));
    this.UpdateContId=this.route.snapshot.paramMap.get('id');
    this.UpdateDate(this.UpdateContId);
    
  }


  UpdateDate(UpdateContId:any)
  {
    this.data.GetEmployeeById(UpdateContId).subscribe((req:any)=>{
      console.log(req);
      this.UpdateArray=req;
      console.log("Update Data",this.UpdateArray.GroupName);
      this.GroupNameGet=this.UpdateArray.groupname;
    })
  }


    onSubmit(Name:string,PhotoUrl:string,Email:string,Mobile:string,Company:string,Title:string,groupname:string)
  {

    let contactid=this.UpdateContId;
    let reqdata={
      Name:Name,
      PhotoURL:PhotoUrl,
      Email:Email,
      Mobile:Mobile,
      Company:Company,
      Title:Title,
      GroupName:groupname
    }
    console.log(reqdata);

    this.data.UpdateValues(contactid,reqdata).subscribe((req:any)=>{
      console.log("Updated Sucessfully",req);
      this.router.navigateByUrl('/');
    })


  }


}
