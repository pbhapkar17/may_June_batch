import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private httpClient: HttpClient) { }
 
   url = "http://localhost:3000/principal"

      postApiCall(formData:any){
      return  this.httpClient.post(this.url, formData);
      }
}
