import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl,FormGroup, Validators } from '@angular/forms';
import { EmployeeModels } from '../contact-manager/employeeModels';
import { HttpdataService } from '../SharedService/httpdata.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {
EmployeeModelObj:EmployeeModels=new EmployeeModels();
  AddContact!:FormGroup;
  submited = false;
  Group:any=['Family', 'Friends', 'Relative'];


  constructor(private formbuild:FormBuilder,private http:HttpdataService) { }

  ngOnInit(): void {
    this.AddContact=this.formbuild.group({
      Name:['',Validators.required,Validators.pattern('[a-zA-Z]{3}')],
      PhotoUrl:['',Validators.required],
      Email:['',Validators.required],
      Mobile:['',Validators.required],
      Company:['',Validators.required],
      Title:['',Validators.required],
      GruopName:['',Validators.required]
    })
    console.log("GroupName");
  }


   postContactDetails()
   {
    console.log(this.AddContact.value);

    this.EmployeeModelObj.Name=this.AddContact.value.Name;
    this.EmployeeModelObj.PhotoURL=this.AddContact.value.PhotoUrl;
    this.EmployeeModelObj.Email=this.AddContact.value.Email;
    this.EmployeeModelObj.Mobile=this.AddContact.value.Mobile;
    this.EmployeeModelObj.Company=this.AddContact.value.Company;
    this.EmployeeModelObj.Title=this.AddContact.value.Title;
    this.EmployeeModelObj.GroupName=this.AddContact.value.GruopName;
    console.log("",this.EmployeeModelObj);

    this.http.postEmployee(this.EmployeeModelObj).subscribe((res:any)=>{
      console.log(res);
      console.log("added successfully");
      alert("contact Added Successfully");
      this.AddContact.reset();
    })

    
   }
  }


