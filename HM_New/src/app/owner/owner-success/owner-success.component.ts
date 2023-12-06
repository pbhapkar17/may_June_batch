import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-owner-success',
  templateUrl: './owner-success.component.html',
  styleUrls: ['./owner-success.component.scss']
})
export class OwnerSuccessComponent {

  allHotelsData:any;
  userName :any;
  hotelDataByUser :any= [];
  constructor(private dataService: DataService){}

  ngOnInit(){
    this.userName = this.dataService.userName;
    this.getHotelData();
  }

  getHotelData(){
     this.dataService.getApiCall("hotelDetails").subscribe(res=>{
         this.allHotelsData = res;
     })
  }


  hotelData(){
    this.allHotelsData.forEach((item:any)=>{
      if( this.userName == item.ownername ){
        this.hotelDataByUser.push(item)
     }
    })
    
  }
}
