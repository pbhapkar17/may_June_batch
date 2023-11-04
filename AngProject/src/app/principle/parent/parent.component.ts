import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
   name:any;
   dataFromChildComponent:any;

   colors = ["green",'red','blue','white','pink'];
   studentDatafromChild:any;

   constructor(private dataService: DataService){

   }

   dataFromChild(data:any){
       console.log(data);
       this.dataFromChildComponent = data;
   }

   studentData(studentD:any){
   console.log(studentD);
   this.studentDatafromChild=studentD
   }
   setSubjetData(){
      this.dataService.city.next("Mumbai");
   }
}
