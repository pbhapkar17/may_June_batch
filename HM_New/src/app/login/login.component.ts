import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  endPoint!:string;
  constructor(private dataService: DataService, private router : Router){

  }

  ngOnInit(){
   this.endPoint = this.dataService.journeyName;
  }
   

}
