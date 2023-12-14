import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiCallService } from 'src/app/commonScreens/commonServces/api-call.service';
import { SnackbarComponent } from 'src/app/snackbar/snackbar.component';

@Component({
  selector: 'app-hotel-registration',
  templateUrl: './hotel-registration.component.html',
  styleUrls: ['./hotel-registration.component.scss']
})
export class HotelRegistrationComponent {
  newHoteRegister!:FormGroup 
  id:any;
  recordById:any;
  durationInSeconds = 5;

  constructor(private fb:FormBuilder ,
    private apiCallService:ApiCallService,
    private router:Router, private matSnackBar: MatSnackBar){} 
    
ngOnInit(){ 
 this.id = this.apiCallService.id;
 this.recordById = this.apiCallService.recordById;
 console.log(this.id,this.recordById);
 
  this.formDetails();
} 
 
formDetails(){ 
  this.newHoteRegister=this.fb.group({ 
    ownerName:[this.recordById ? this.recordById[0]?.ownerName : '',Validators.required], 
    
   // midName:['',Validators.required], 
    // lastName:['',Validators.required], 
    // email:['',[Validators.required,Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]], 
    // panNumber:['',], 
    mobileNumber: [this.recordById ? this.recordById[0]?.mobileNumber : '', [Validators.required, Validators.pattern('[0-9+]*')]], 
    hotelName:[ this.recordById ? this.recordById[0]?.hotelName : '',Validators.required], 
    hotelAdress:[this.recordById ? this.recordById[0]?.hotelAdress : '',Validators.required], 
    hotelNumber:[this.recordById ? this.recordById[0]?.hotelNumber:'',[Validators.required, Validators.pattern('[0-9+]*')]], 
    hotelMenu:[this.recordById ? this.recordById[0]?.hotelMenu :'',Validators.required], 
    rooms:[this.recordById ? this.recordById[0]?.rooms:'',Validators.required], 
    // gender:['',Validators.required], 
    // userName: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]*$')]], 
    pass: [this.recordById ? this.recordById[0]?.pass :'', [Validators.required, Validators.minLength(8)]], 
    checkBox:[this.recordById ? this.recordById[0]?.checkBox :'',Validators.required] 
  }) 
} 
 
 
newHotelRegistration(){ 
  let endPoint = "hotelDetails";
  console.log(this.newHoteRegister.value); 
  this.apiCallService.postApiCall(endPoint,this.newHoteRegister.value).subscribe(res=>{ 
    console.log("responce::>>",res); 
   // if(res){ 
      // alert('Hotel registered Successfuly...!!'); 
      this.matSnackBar.openFromComponent(SnackbarComponent, {
        duration: this.durationInSeconds * 1000,
      });
      this.router.navigateByUrl('/owner/ownerSucces'); 
   // } 
  }) 
} 

update(){
  this.apiCallService.patchApiCall("hotelDetails",this.id,this.newHoteRegister.value).subscribe(res=>{

  })
  this.router.navigateByUrl("owner/ownerSuccess")
}
ngOnDestroy(){
  console.log("destroy");
  
  this.apiCallService.recordById=[];
}
}
