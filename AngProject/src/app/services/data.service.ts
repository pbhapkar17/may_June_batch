import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

   formUserName : any;
   inpBox : any;
   city = new Subject<string>();
   nameSubjectData = new Subject<string>();
   recordTobeUpdate :any;
    idToUpdate: any;

   constructor() { }

   //services: : ng g s serviceName
   //services are used to share data amoung compo's,also, 
   //to write reusable code with a focused purpose, to use across multiple components in your application.
  //We can reuse the service at many places.

  removeWhiteSpace(customValFieldValue : any){
    let isInValid = customValFieldValue.value ? customValFieldValue.value?.trim().length == 0 : null
    return isInValid ? {'whiteSpace':true}  : null;
  }
  
  }
