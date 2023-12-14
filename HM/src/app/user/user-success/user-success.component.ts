import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCallService } from 'src/app/commonScreens/commonServces/api-call.service';

@Component({
  selector: 'app-user-success',
  templateUrl: './user-success.component.html',
  styleUrls: ['./user-success.component.scss']
})
export class UserSuccessComponent {

  hotelsList:any;
  showRecord=false;
  headings = ["Hotel Name","Hotel Address","Hotel Number","Hotel Menu","Room","Edit","Delete"];
  searchText:any
  constructor(private router:Router,private apiCallService: ApiCallService){}

    async showHotels(){
      this.hotelsList = await this.apiCallService.getApiCall("hotelDetails").toPromise()
      this.showRecord =true;
      console.log("hotelDetails",this.hotelsList);
  }
}
