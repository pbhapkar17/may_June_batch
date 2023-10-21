import { Component } from '@angular/core';

@Component({
  selector: 'app-principal-login',
  templateUrl: './principal-login.component.html',
  styleUrls: ['./principal-login.component.scss']
})
export class PrincipalLoginComponent {
  userName:any
  // forGetPassword = false;
  showLoginForm = true;
  newPassword :any;
  confirmPassword :any;
  isMatch :boolean = false
  submit(form: any) {
    console.log(form);

  }
  forgetPassword(){
    this.showLoginForm = false;
  }
  passwordMatch(confirmPassword :any){
   
     this.confirmPassword = confirmPassword;

     if(this.newPassword ==  this.confirmPassword){
             this.isMatch =false;
     }else{
      this.isMatch = true;
     }
     
  }
  newPasswordFiledValue(newPassValue:any){
    this.newPassword = newPassValue;
  }
}
