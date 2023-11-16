import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiCallService } from 'src/app/services/api-call.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-principal-sign-up',
  templateUrl: './principal-sign-up.component.html',
  styleUrls: ['./principal-sign-up.component.scss']
})
export class PrincipalSignUpComponent {

  principalSignUpForm! : FormGroup;
  age = 20;
  todayDate = new Date();
  userAge: any;
  datePattern = /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/;
  isGenderSelected: boolean = false;
  showPass = false;
  constructor( public fb : FormBuilder, public dataService:DataService,
    private apiCallService:ApiCallService, public router:Router){}

  ngOnInit(){
   this.formDetails();
   console.log(this.todayDate,);

    
  }

  formDetails(){
    this.principalSignUpForm = this.fb.group({
      userName : ['Poonam',[Validators.maxLength(10),Validators.minLength(5),Validators.pattern('[a-zA-Z ]+')]],
      emailId:[,[Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      mobNo:['',[Validators.pattern('[0-9+]*')]],
     // dob:['',[Validators.pattern(/^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/)]]
     dob:['',[Validators.pattern(this.datePattern)]],
     TC:[false,Validators.requiredTrue],
     gender:[''],
     cars:[],
     customVal:['',this.dataService.removeWhiteSpace],
     oldField:['',this.oldWordRestriction],
     password:[]
    })
  }
  
 

  oldWordRestriction(inputValue: any) {
    //Old,OLD,oLd,OLd,olD....
    let inputValue1 = inputValue.value?.toLowerCase().split(' ');
    let isIncludeOld = inputValue1.includes('old');
    return isIncludeOld ? { 'oldWord': true } : null;
  }

  submit(){
    let gender = this.principalSignUpForm.value.gender
    if(gender){
      console.log('f data',this.principalSignUpForm.value);
      this.apiCallService.postApiCall(this.principalSignUpForm.value).subscribe(response=>{
        console.log("res>>",response);
        if(response){
          alert('Data submitted Successfuly...!!');
          this.router.navigateByUrl('/PrincipleMod/PrincipalSuccess');
        }
      })
    }
    else{
      this.isGenderSelected = true;
      return
    }
    
    
  }

  calYear(event:any){
    console.log('event',event.target.value);
    
    if(event.target.value.length > 9){
      let dobFieldValue = this.principalSignUpForm.value.dob;
      let todayFullYear = this.todayDate.getFullYear();
      let splitedDate = dobFieldValue?.split('/');
      let usersFullYear = splitedDate[2];
      this.userAge = todayFullYear - usersFullYear;
    }
     
  }
  gender(){
    this.isGenderSelected = false;
  }
  showPassword(){
     console.log('..,.m,m');
     this.showPass = !this.showPass;
  }
}
