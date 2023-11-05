import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  inputBoxVal:any
  constructor(private router:Router,
    private dataService: DataService){}

  principleModLoad(){
    console.log( this.inputBoxVal);
    this.dataService.inpBox = this.inputBoxVal; //set
    this.router.navigateByUrl('PrincipleMod/principleHome')

  }

  subjectModule(){
     this.router.navigateByUrl('subjectModule/sujectLanding')
  }
}
