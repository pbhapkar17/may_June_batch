import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCallService } from 'src/app/commonScreens/commonServces/api-call.service';

@Component({
  selector: 'app-owner-success',
  templateUrl: './owner-success.component.html',
  styleUrls: ['./owner-success.component.scss']
})
export class OwnerSuccessComponent {
  hotelDetails:any;
  ownerName:any;
  hotelDetailsByOwner!:any[];
  headings = ["Hotel Name","Hotel Address","Hotel Number","Hotel Menu","Room"];
  showRecord:boolean = false;
  constructor(private router:Router,private apiCallService: ApiCallService,
    ){} 

ngOnInit(){
this.ownerName =  this.apiCallService.ownerName;
}


 async showHotelDetails(){
  this.hotelDetailsByOwner = [];
  this.hotelDetails = await this.apiCallService.getApiCall("hotelDetails").toPromise()
    console.log("hotelDetails",this.hotelDetails);
    this.getHotelByOwner()
}

getHotelByOwner(){
  this.hotelDetails.forEach((element:any) => {
    if(element.ownerName == this.ownerName ){
      this.hotelDetailsByOwner.push(element)
    }
  });
  if(this.hotelDetailsByOwner.length > 0){
   this.showRecord = true;
  }
  console.log("hote list by owner",this.hotelDetailsByOwner);
  
}


edit(id:any){

}
delete(id:any){

}
}
