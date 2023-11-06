import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-subject1',
  templateUrl: './subject1.component.html',
  styleUrls: ['./subject1.component.scss']
})
export class Subject1Component {
  @ViewChild('city') cityEleRef! : ElementRef;
   dataInSubject1Compo :any;
   data:any;


   ngAfterViewInit(){
    this.cityEleRef.nativeElement.innerHTML = "Pune";
   }
}
