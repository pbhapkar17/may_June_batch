import { Component } from '@angular/core';

@Component({
  selector: 'app-principal-login',
  templateUrl: './principal-login.component.html',
  styleUrls: ['./principal-login.component.scss']
})
export class PrincipalLoginComponent {
  userName:any


  submit(form: any) {
    console.log(form);

  }
}
