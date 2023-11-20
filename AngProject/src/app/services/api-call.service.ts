import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private httpClient: HttpClient) { }

  url = "http://localhost:3000/principal";


  postApiCall(formData: any) {
    return this.httpClient.post(this.url, formData);//request body/payload/json data{}
  }

  getApiCall(id?:number) {
    let url = id ? this.url + "/" + id : this.url;
    return this.httpClient.get(url);
  }

  deletApiCall(id:number) {
      let deleteUrl = this.url + "/" + id;
     return this.httpClient.delete(deleteUrl);
  }

  putApiCall(id:any,data:any) {
    let url = this.url + "/" + id ;
     return this.httpClient.put(url,data)
  }
 
}
