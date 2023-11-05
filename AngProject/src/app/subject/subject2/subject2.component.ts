import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-subject2',
  templateUrl: './subject2.component.html',
  styleUrls: ['./subject2.component.scss']
})
export class Subject2Component {
  name!:string;
   constructor( private dataService :DataService){

   }
  ngOnInit(){
    this.dataService.nameSubjectData.subscribe(name=>{
   this.name = name;
   console.log(name);
   
    })
  }
} 
