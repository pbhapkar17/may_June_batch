import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  tableHeading = ['Name', 'Age', 'City'];

  students = [
    { name: 'tushar', age: 20, city: "pune" },
    { name: 'Pooja', age: 23, city: "pune" },
    { name: "om", age: 22, city: "pune" },
    { name: 'tushar', age: 20, city: "pune" },
    { name: 'Pooja', age: 23, city: "pune" },
    { name: "om", age: 22, city: "pune" },
    { name: 'tushar', age: 20, city: "pune" },
    { name: 'Pooja', age: 23, city: "pune" },
    { name: "om", age: 22, city: "pune" }
  ];

  searchedValue:any;
  amount:any;
}
