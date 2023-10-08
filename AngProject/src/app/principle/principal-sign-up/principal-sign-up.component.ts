import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-principal-sign-up',
  templateUrl: './principal-sign-up.component.html',
  styleUrls: ['./principal-sign-up.component.scss']
})
export class PrincipalSignUpComponent {

  principalSignUpForm! : FormGroup;

  constructor( public fb : FormBuilder){}

  ngOnInit(){
   this.formDetails();
  }

  formDetails(){
    this.principalSignUpForm = this.fb.group({
      userName : ['poonam',[Validators.maxLength(10)]],
      emailId:[]
    })
  }
  
  submit(){
    console.log('f data',this.principalSignUpForm.value);
    
  }
}
