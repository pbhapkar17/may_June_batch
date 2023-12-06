import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  endPoint!: string;
  loginForm!: FormGroup;

  showWorning = true;
  showPass: boolean = false;
  userData: any;
  showpass = false;
  constructor(private dataService: DataService,
    private fb: FormBuilder,
    private router: Router) {

  }

  ngOnInit() {
    this.endPoint = this.dataService.journeyName;
    this.formDetails();
    this.getUserData()
  }



  formDetails() {
    this.loginForm = this.fb.group({
      userName: ["", [Validators.required]],
      password: ["", [Validators.required]]
    })
  }





  getUserData() {

    this.dataService.getApiCall(this.endPoint).subscribe(res => {
      this.userData = res;
      console.log("userdata", this.userData);

    })

  }

  showPassword() {
    this.showpass = !this.showpass
  }

  login() {
    if (this.userData) {
      var matchedObj = this.userData.find((item: any) => {
        if (item.userName == this.loginForm.value.userName && item.password == this.loginForm.value.password) {
          return item;
        }

      })
    }

    if (matchedObj) {
     this.dataService.userName = this.loginForm.value.userName;
    if(this.endPoint == "admin"){
      this.router.navigateByUrl('admin/adminSuccess'); 
    } 
      else if(this.endPoint == "owner"){
        this.router.navigateByUrl('owner/ownerSuccess'); 
      } 
      else{
        this.router.navigateByUrl('user/userSuccess'); 
      }

    }
    else {
      this.router.navigateByUrl('login');
    }
  }
}



