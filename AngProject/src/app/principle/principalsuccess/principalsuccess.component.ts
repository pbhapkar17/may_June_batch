import { Component } from '@angular/core';

@Component({
  selector: 'app-principalsuccess',
  templateUrl: './principalsuccess.component.html',
  styleUrls: ['./principalsuccess.component.scss']
})
export class PrincipalsuccessComponent {
  showAddr: boolean = false;
  city: boolean = false;
  cars = ['Swift','jaguar','MiniCuper','Audi'];
  students = [
    {name:'tushar',age:20},
    {name:'Pooja',age:23},
    {name:"om",age:22}
  ];

  emp = [
    {
      name:
        { firstName: 'poonam', lastName: 'patil' }
    },
    {
      name:
        { firstName: 'Ravi', lastName: 'patil' }
    },
    {
      name:
        { firstName: 'Shekhar', lastName: 'patil' }
    }
  ]
  toshowAddress() {
    //this.showAddr = true;
      this.showAddr = !this.showAddr;  //!f --> t, !t ->f
  }
  toShowCity() {
    // this.city = true;
    this.city = !this.city;
  }
  toshowCars(){

  }


}
