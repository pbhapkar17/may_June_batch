import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiCallService } from 'src/app/commonScreens/commonServces/api-call.service';

@Component({
  selector: 'app-owner-login',
  templateUrl: './owner-login.component.html',
  styleUrls: ['./owner-login.component.scss']
})
export class OwnerLoginComponent {
 loginForm!:FormGroup;

 showWorning=true; 
 showPass:boolean=false; 
 ownerData:any;
 showpass = false;
 
 constructor(private fb:FormBuilder,private router:Router,private apiCallService: ApiCallService,
  ){} 
 ngOnInit(){ 
  this.formDetails(); 
  this.getOwnerData();
 } 
 formDetails(){ 
 this.loginForm=this.fb.group({ 
  userName :["",[Validators.required]], 
  password:["",[Validators.required]] 
 }) 
 } 
  
 
 


getOwnerData(){
   let endPoint ="owner";
  this.apiCallService.getApiCall(endPoint).subscribe(res=>{
   this.ownerData = res;
   console.log("ownerdata",this.ownerData);
   
  })

}

showPassword() {
  this.showpass = !this.showpass
}

login(){
  if(this.ownerData){
   var matchedObj= this.ownerData.find((item:any)=>{
   if(item.userName == this.loginForm.value.userName && item.password == this.loginForm.value.password){
      return item;
    }
    
    })
  }
  if(matchedObj){
    this.router.navigateByUrl('owner/ownerSuccess');
  }
  else{
    this.router.navigateByUrl('owner');
  }
}
}
