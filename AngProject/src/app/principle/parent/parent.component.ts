import { Component } from '@angular/core';

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
   dataFromChild(data:any){
       console.log(data);
       this.dataFromChildComponent = data;
   }

   studentData(studentD:any){
   console.log(studentD);
   this.studentDatafromChild=studentD
   }

}
