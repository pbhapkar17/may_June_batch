import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { ApiCallService } from '../services/api-call.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {

  inputBoxVal:any
  name : string = "poonam";
  date = "04/04/1990";
  principalData : any;

  constructor(private router:Router,
    private dataService: DataService, private apiCallService : ApiCallService){
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

  getApi(){
      this.apiCallService.getApiCall().subscribe(res => {
         this.principalData = res;
         console.log("res>>",res);
         
      })
  }

  deleteApi(){
    let id = 5;
     this.apiCallService.deletApiCall(id).subscribe(respon =>{
         console.log('delete res',respon);
         
     })
  }

 async putApi(){
      let id = 6;
      // this.apiCallService.getApiCall(id).subscribe(rec=>{
      //   console.log("6 id rec",rec);
      //   this.dataService.recordTobeUpdate = rec;
      //   this.dataService.idToUpdate = id;
      // })
     this.dataService.recordTobeUpdate = await this.apiCallService.getApiCall(id).toPromise()
     this.dataService.idToUpdate = id;
     this.router.navigateByUrl("/PrincipleMod/signUp");
  }
}
