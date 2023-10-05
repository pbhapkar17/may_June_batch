import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principle-home',
  templateUrl: './principle-home.component.html',
  styleUrls: ['./principle-home.component.scss']
})
export class PrincipleHomeComponent {
   constructor(public route:Router){}

   signUp(){
    // debugger
    this.route.navigateByUrl('PrincipleMod/signUp')
   }
}
