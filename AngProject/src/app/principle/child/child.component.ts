import { Component,EventEmitter,Input, Output } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
   @Input() dataFromParentCompo:any;
   @Output() childDataEvent = new EventEmitter<any>();
   @Input() colorsFromPrent:any;
   @Output() studentEvent = new EventEmitter<any>();

   data:any;
    student = {
    name: "poonam",
    age: 30,
    city: "mumbai"
     };

   city:any;
  constructor(private dataService: DataService){

  }
   ngOnInit(){
      this.dataService.city.subscribe(cityName=>{
         this.city = cityName;
      })
   }

   submit(){
      this.childDataEvent.emit(this.data);
      this.studentEvent.emit(this.student);
   }
}
