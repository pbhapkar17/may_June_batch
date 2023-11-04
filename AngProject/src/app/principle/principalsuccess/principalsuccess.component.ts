import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-principalsuccess',
  templateUrl: './principalsuccess.component.html',
  styleUrls: ['./principalsuccess.component.scss']
})

export class PrincipalsuccessComponent {

  name : any;
  
  constructor(private dataService:DataService ){}
  

  ngOnInit(){
    //getting of data fromservice
    this.name =  this.dataService.formUserName;
  }
  setSub(){
    this.dataService.city.next("Satara");
  }
}
