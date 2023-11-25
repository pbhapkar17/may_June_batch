import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-owner-sig-up',
  templateUrl: './owner-sig-up.component.html',
  styleUrls: ['./owner-sig-up.component.scss']
})
export class OwnerSigUpComponent {
  sinupForm!: FormGroup;
  showWorning: boolean = true;
  gender: boolean = false;
  showpass = false;

  constructor(private fb: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.formDetails()
  }

  formDetails() {
    this.sinupForm = this.fb.group({
      firstName: ['', Validators.required],
      midName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      panNumber: ['',],
      mobileNumber: ['', [Validators.required, Validators.pattern('[0-9+]*')]],
      gender: ['', Validators.required],
      userName: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]*$')]],
      pass: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  hideHint() {
    this.showWorning = !this.showWorning;
  }

  isShowPassword() {
    this.showpass = !this.showpass
  }

  submitSingUpForm() {

    let gen = this.sinupForm.value.gender
    if (gen) {

      console.log(this.sinupForm.value);
      // this.apiCallService.postApiCall(this.sinupForm.value).subscribe(res=>{ 
      //   console.log("ressponce>>>>",res); 
      //   if(res){ 
      //     alert('Data submitted Successfuly...!!'); 
      //     this.router.navigateByUrl('/ownerMod/ownerSucces'); 
      //   } 

      // }) 
    } else {
      this.gender = true;
      return
    }

  }

}
