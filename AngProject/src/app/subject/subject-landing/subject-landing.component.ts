import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Subject1Component } from '../subject1/subject1.component';

@Component({
  selector: 'app-subject-landing',
  templateUrl: './subject-landing.component.html',
  styleUrls: ['./subject-landing.component.scss']
})
export class SubjectLandingComponent {
  subjectForm!:FormGroup;
  @ViewChild(Subject1Component) subject1ComponentRef! : Subject1Component;
  @ViewChild('para') paraEleRef! : ElementRef;
  constructor(private fb: FormBuilder,
     private dataService :DataService){

  }

   ngOnInit(){
    this.subectDetailsForm();
   }

   ngAfterViewInit(){
     this.paraEleRef.nativeElement.innerHTML = 'Patil';
    console.log(this.paraEleRef);
   }


   subectDetailsForm(){
    this.subjectForm = this.fb.group({
       name:[],
       password:[]
    });
   }

   submit(){
      this.dataService.nameSubjectData.next(this.subjectForm.value.name);
   }


  //@ViewChild is a decorator that is used to get
  // a reference to a child component
  // or an element within a parent component.
  // It allows the parent component to access 
  //and interact with the properties, 
  //methods, and events of the child component or element within a parent component.

viewChild(){
  this.subject1ComponentRef.dataInSubject1Compo = this.subjectForm.value.name;
}

}
