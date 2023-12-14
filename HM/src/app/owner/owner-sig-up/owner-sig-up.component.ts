import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiCallService } from 'src/app/commonScreens/commonServces/api-call.service';

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
  endPoint:string = "owner";
  constructor(private fb: FormBuilder,private apiCallService: ApiCallService,
    private router: Router) { }

  ngOnInit() {
    this.formDetails()
  }

  formDetails() {
    this.sinupForm = this.fb.group({
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      panNumber: ['',[Validators.required]],
      mobileNumber: ['', [Validators.required, Validators.pattern('[0-9+]*')]],
      gender: ['male', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  hideHint() {
    this.showWorning = !this.showWorning;
  }

  showPassword() {
    this.showpass = !this.showpass
  }

  submit() {
    let payload = {
      user_name : this.sinupForm.value.userName,
      email : this.sinupForm.value.email,
      pan_number :this.sinupForm.value.panNumber,
      mob_no: this.sinupForm.value.mobileNumber.toString(),
      password: this.sinupForm.value.password,
      gender : this.sinupForm.value.gender,
      limit:10,
      offset:1
    }
    
    this.apiCallService.postApiCall(this.endPoint,payload ).subscribe(res=>{})
    this.router.navigateByUrl('/owner/ownerSuccess');
  }

}
