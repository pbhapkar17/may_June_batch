import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent {

  showAddr: boolean = false;
  city: boolean = false;
  cars = ['Swift', 'jaguar', 'MiniCuper', 'Audi'];
  students = [
    { name: 'tushar', age: 20, city: "pune" },
    { name: 'Pooja', age: 23, city: "pune" },
    { name: "om", age: 22, city: "pune" }
  ];

  tableHeading = ['Name', 'Age', 'City'];

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
  ];

  amount: any = 60000;  // boolean true - true ; data- true , null/undefined >>false
  age = 18;
  showTable=true;
  inputValue:any;
  data : any[] = [];
  color ="green";

  toshowAddress() {
    //this.showAddr = true;
    this.showAddr = !this.showAddr;  //!f --> t, !t ->f
  }
  toShowCity() {
    // this.city = true;
    this.city = !this.city;
  }
  toshowCars() {

  }
  inputBoxVal(){
     console.log(this.inputValue);
     this.data.push(this.inputValue)
  }
}
