import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
   selector: 'app-child',
   templateUrl: './child.component.html',
   styleUrls: ['./child.component.scss']
})
export class ChildComponent {
   @Input() dataFromParentCompo: any;
   @Output() childDataEvent = new EventEmitter<any>();
   @Input() colorsFromPrent: any;
   @Output() studentEvent = new EventEmitter<any>();

   data: any;
   student = {
      name: "poonam",
      age: 30,
      city: "mumbai"
   };

   city: any;
   //constructor is not a lf cycle hook,it will call first then hooks will get invoked
   constructor(private dataService: DataService) {
      console.log("contructor calling");

   }
   ngDoCheck() {
      console.log("do check calling");
      //it will trigger after onChanges first time and repeatadly will get trigger after every onchanges
   }
   //if component is having input bound properties then 
   //ngOnchanges will get trigger first then ngOninit will get trigger
   //repeatadly it will get trigger/call on every change of input bound property.
   ngOnChanges() {
      console.log('ng changes calling');

   }
   //this will trigger first if compo dont have 
   //input bound properties
   //it will get invoked only once
   ngOnInit() {
      console.log("on init calling");
      this.dataService.city.subscribe(cityName => {
         this.city = cityName;
      })
   }


   ngAfterContentInit() {
      //it will trigger only once after do check 
      console.log("aftercontent init");

   }
   ngAfterContentChecked() {
      //called after every doCheck
      console.log("content cheked");

   }

   ngAfterViewInit() {
      //it will called after compiler intializes component and child compo
      //invoked only once after oninit()
      console.log('afterViewInit......');

   }

   ngAfterViewChecked() {
      //first time it will get invoked after ngafterviewinit 
      //called after every  ngAfterContentChecked()
      console.log("ngAfterViewChecked..");

   }


   submit() {
      this.childDataEvent.emit(this.data);
      this.studentEvent.emit(this.student);
   }


   ngOnDestroy() {
      console.log('ondestroy....');

   }
}
