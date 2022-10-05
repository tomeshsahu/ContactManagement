import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpdataService {

  constructor(private httpdata:HttpClient) { }

  postEmployee(reqdata:any)
  {
    return this.httpdata.post("http://localhost:3000/posts",reqdata)
  }

  GetEmployee()
  {
    return this.httpdata.get("http://localhost:3000/posts");
  }

  GetEmployeeById(reqdata:any)
  {
    return this.httpdata.get(`http://localhost:3000/posts/${reqdata}`)
  }

  DeleteCont(data:any)
  {
    return this.httpdata.delete(`http://localhost:3000/posts/${data}`);
  }

  UpdateValues(id:any,reqdata:any)
  {
    return this.httpdata.put(`http://localhost:3000/posts/${id}`,reqdata);
  }
  
}
