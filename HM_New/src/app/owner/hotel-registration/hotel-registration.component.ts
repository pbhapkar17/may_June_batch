import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-hotel-registration',
  templateUrl: './hotel-registration.component.html',
  styleUrls: ['./hotel-registration.component.scss']
})
export class HotelRegistrationComponent {
  registerForm!:FormGroup; 
  endPoint = "hotelDetails" ;
  imagepath:any; 
 
constructor(private router:Router,private fb:FormBuilder,private dataService:DataService){} 
ngOnInit(){ 
  this.formAllData() 
} 
formAllData(){ 
  this.registerForm=this.fb.group({ 
    ownername:['',[Validators.required,Validators.pattern('[a-zA-z]*')]], 
    ownermobile:['',[Validators.required,Validators.pattern('[0-9]*')]], 
    hotelname:['',[Validators.required]], 
    hoteladdress:['',[Validators.required]], 
    hotelmobile:['',[Validators.required,Validators.pattern('[0-9]*')]], 
    rating:['',[Validators.required,Validators.pattern('[0-5]')]], 
    room:['',[Validators.required,Validators.pattern('[0-9]*')]], 
    price:['',[Validators.required,Validators.pattern('[0-9]*')]], 
    hotelimages:[] 
 
  }) 
} 
 
submit(){ 
  this.dataService.postApiCall(this.endPoint,this.registerForm.value).subscribe(res =>{ 
   
   this.router.navigateByUrl("owner/ownerSuccess") 
  }) 
} 
  back(){ 
    this.router.navigateByUrl("owner/ownerSuccess") 
  } 
 
}
