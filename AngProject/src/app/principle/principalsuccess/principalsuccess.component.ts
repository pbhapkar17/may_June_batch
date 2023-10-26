import { Component } from '@angular/core';

@Component({
  selector: 'app-principalsuccess',
  templateUrl: './principalsuccess.component.html',
  styleUrls: ['./principalsuccess.component.scss']
})
export class PrincipalsuccessComponent {
  showAddr: boolean = false;
  city: boolean = false;

  showAddress() {
    //this.showAddr = true;
      this.showAddr = !this.showAddr;  //!f --> t, !t ->f
  }
  toShowCity() {
    // this.city = true;
    this.city = !this.city;
  }


}
