import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-owner-login',
  templateUrl: './owner-login.component.html',
  styleUrls: ['./owner-login.component.scss']
})
export class OwnerLoginComponent {
 loginForm!:FormGroup;

 showWorning=true; 
 showPass:boolean=false; 
 
 
 constructor(private fb:FormBuilder,private router:Router){} 
 ngOnInit(){ 
  this.formDetails(); 
 } 
 formDetails(){ 
 this.loginForm=this.fb.group({ 
  userName :["",Validators.required], 
  pass:["",Validators.required] 
 }) 
 } 
  
 
 
submitLoginForm(){ 
  console.log("login form Details",this.loginForm.value); 
 
  this.router.navigateByUrl('ownerMod/ownerSucces') 
  
} 
}
