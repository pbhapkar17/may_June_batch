import { Component } from '@angular/core'; //impot section

@Component({  //component directive/decorator
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { //class to write code here
  title = 'may_june_angular_session';
//let/var/const city = 'pune';
//any Data type
//property
 city? : string ; //declaration of property

 city2 : string = 'pune'; //declration + def of proprty

 city3 = 'mumbai.....';

  constructor(){}    //to inject dependancies
  
//life cycle hooks 

//functions
}
