import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-principle-home',
  templateUrl: './principle-home.component.html',
  styleUrls: ['./principle-home.component.scss']
})
export class PrincipleHomeComponent {

  inputValue :any;
   constructor(public route:Router , 
    private dataService:DataService){}

   ngOnInit(){
   this.inputValue = this.dataService.inpBox;
   }

   signUp(){
    // debugger
    this.route.navigateByUrl('PrincipleMod/signUp');
   }


}
