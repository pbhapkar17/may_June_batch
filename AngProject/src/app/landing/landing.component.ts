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
  name : string = "poonam";
  date = "04/04/1990";
  constructor(private router:Router,
    private dataService: DataService){
      console.log("constructer calling..");
      
    }

    ngOnChanges(){
      console.log('ng changes calling..');
      
   }
//this compo dont hv inp bound property so oninit will invoked first
   ngOnInit(){
      console.log("on init calling..");
   }

  principleModLoad(){
    console.log( this.inputBoxVal);
    this.dataService.inpBox = this.inputBoxVal; //set
    this.router.navigateByUrl('PrincipleMod/principleHome')

  }

  subjectModule(){
     this.router.navigateByUrl('subjectModule/sujectLanding')
  }
}
