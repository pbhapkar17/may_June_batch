import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiCallService } from 'src/app/commonScreens/commonServces/api-call.service';

@Component({
  selector: 'app-hotel-registration',
  templateUrl: './hotel-registration.component.html',
  styleUrls: ['./hotel-registration.component.scss']
})
export class HotelRegistrationComponent {
  newHoteRegister!:FormGroup 
  
  
  constructor(private fb:FormBuilder ,
    private apiCallService:ApiCallService,
    private router:Router){} 
    
ngOnInit(){ 
  this.formDetails() 
} 
 
formDetails(){ 
  this.newHoteRegister=this.fb.group({ 
    ownerName:['',Validators.required], 
    
   // midName:['',Validators.required], 
    // lastName:['',Validators.required], 
    // email:['',[Validators.required,Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]], 
    // panNumber:['',], 
    mobileNumber: ['', [Validators.required, Validators.pattern('[0-9+]*')]], 
    hotelName:['',Validators.required], 
    hotelAdress:['',Validators.required], 
    hotelNumber:['',[Validators.required, Validators.pattern('[0-9+]*')]], 
    hotelMenu:['',Validators.required], 
    rooms:['',Validators.required], 
    // gender:['',Validators.required], 
    // userName: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]*$')]], 
    pass: ['', [Validators.required, Validators.minLength(8)]], 
    checkBox:['',Validators.required] 
  }) 
} 
 
 
newHotelRegistration(){ 
  let endPoint = "hotelDetails";
  console.log(this.newHoteRegister.value); 
  this.apiCallService.postApiCall(endPoint,this.newHoteRegister.value).subscribe(res=>{ 
    console.log("responce::>>",res); 
   // if(res){ 
      alert('Hotel registered Successfuly...!!'); 
      this.router.navigateByUrl('/ownerMod/ownerSucces'); 
   // } 
  }) 
} 
}
