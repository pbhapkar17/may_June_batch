import { Component } from '@angular/core'; //impot section

@Component({  //component directive/decorator
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { //class to write code here
  title = 'My first Application';
//let/var/const city = 'pune';
//any Data type: city:any 
//property
 city? : string ; //declaration of property

 city2 : string = 'pune'; //declration + def of proprty

 city3 = 'mumbai.....';
 name='poonam';
 no1 = 10;
 no2= 200;
 no3='88';
 data1 = 50;
 cars : string[] = ['Swift','Jaguar', 'Audi'];
 car = this.cars[1]; //Jaguar
 student = { name:'Om', age:20 };

 genderMale = false;
genderM='male';
genderF='Female';
genderFemale = false;
  constructor(){}    //to inject dependancies
  
//life cycle hooks 

//functions
//Data binding: It is a technique to link data between a component and the DOM. 
 //1.one way data binding 2.two way data binding
//1.one way data binding :1.string interpolation 2.property binding 3.event binding
//string interpolation:It is a one way data binding technique: .ts/model to dom/html/template {{}}

learningInterpolation(){  //Void: default type of function 
  //return 'patil';
  return this.city2;
  
}

gen(data:any){
  console.log('data',data.target.value);
  
}

}
