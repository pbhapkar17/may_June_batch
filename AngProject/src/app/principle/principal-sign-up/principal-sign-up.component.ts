import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-principal-sign-up',
  templateUrl: './principal-sign-up.component.html',
  styleUrls: ['./principal-sign-up.component.scss']
})
export class PrincipalSignUpComponent {

  principalSignUpForm! : FormGroup;
  age = 20;
  todayDate= new Date();
  calAge: any;
  constructor( public fb : FormBuilder){}

  ngOnInit(){
   this.formDetails();
   console.log(this.todayDate,);

    
  }

  formDetails(){
    this.principalSignUpForm = this.fb.group({
      userName : ['Poonam',[Validators.maxLength(10),Validators.minLength(5),Validators.pattern('[a-zA-Z ]+')]],
      emailId:[,[Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      mobNo:['',[Validators.pattern('[0-9+]*')]],
      dob:[]
    })
  }
  
  submit(){
    console.log('f data',this.principalSignUpForm.value);
    
  }

  calYear(){
      let dob = this.principalSignUpForm.value.dob;
      let fYear = this.todayDate.getFullYear()
      console.log(fYear);
      let dobYear = dob.split('/');
      let onlyYear = dobYear[2];
      this.calAge = fYear - onlyYear;
  }
}
