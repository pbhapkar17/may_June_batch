import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  journeyName!:string;
  
  url = "http://localhost:3000";
  userName: any;
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
