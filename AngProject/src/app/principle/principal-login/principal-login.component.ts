import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-principal-login',
  templateUrl: './principal-login.component.html',
  styleUrls: ['./principal-login.component.scss']
})
export class PrincipalLoginComponent {
  userName: any
  // forGetPassword = false;
  showLoginForm = true;
  newPassword: any;
  confirmPassword: any;
  isMatch: boolean = false

  constructor(private router:Router , private dataService : DataService ){

  }

  forgetPassword() {
    this.showLoginForm = false;
  }

  // passwordMatch(confirmPassword?: any) {

  //   this.confirmPassword = confirmPassword;
  //   this.checkPass();
  // }
  passwordMatch(newPassword:any,confirmPassword:any){
    if (newPassword == confirmPassword) {
      this.isMatch = false;
    } else {
      this.isMatch = true;
    }
  }
  // newPasswordFiledValue(newPassValue: any) {
  //   this.newPassword = newPassValue;
  // }

  // newPasswordMatch() {
  //   this.checkPass();
  // }

  // checkPass() {
  //   if (this.newPassword == this.confirmPassword) {
  //     this.isMatch = false;
  //   } else {
  //     this.isMatch = true;
  //   }
  // }

  submit(formData: any) {
    console.log(formData);
    //set username into service
      this.dataService.formUserName = formData.userName;
       this.router.navigateByUrl('PrincipleMod/PrincipalSuccess')
  }
}
