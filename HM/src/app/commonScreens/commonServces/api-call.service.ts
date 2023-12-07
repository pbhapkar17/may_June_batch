
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

   url = "http://localhost:3000";
  ownerName: any;
  constructor(private httpClient: HttpClient) { }

  postApiCall(endPoint: any, formData: any) {
    //  http://localhost:3000/owner
    let url = this.url + '/' + endPoint;
    return this.httpClient.post(url, formData);
  }

  getApiCall(endPoint :any){
   let url = this.url + "/" + endPoint;
   return this.httpClient.get(url);
  }

}
