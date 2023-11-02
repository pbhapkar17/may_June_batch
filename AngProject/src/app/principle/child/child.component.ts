import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
   @Input() dataFromParentCompo:any;
   @Output() childDataEvent = new EventEmitter<any>();
   data:any;
   @Input() colorsFromPrent:any;

  student = {
    name: "poonam",
    age: 30,
    city: "mumbai"
  };

  @Output() studentEvent = new EventEmitter<any>();

   ngOnInit(){
 
   }

   submit(){
      this.childDataEvent.emit(this.data);
      this.studentEvent.emit(this.student);
   }
}
