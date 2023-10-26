import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router:Router){

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

  submit(form: any) {
    console.log(form);
       this.router.navigateByUrl('PrincipleMod/PrincipalSuccess')
  }
}
