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
  city?: string; //declaration of property

  city2: string = 'pune'; //declration + def of proprty

  city3 = 'mumbai.....';
  name = 'poonam';
  no1 = 10;
  no2 = 200;
  no3 = '88';
  data1 = 50;
  cars: string[] = ['Swift', 'Jaguar', 'Audi'];
  car = this.cars[1]; //Jaguar
  student = { name: 'Om', age: 20 };
  genderM = 'Male';
  genderF = 'Female';
  paintingHobby = "Painting";
  skechingHobby = "Skeching";
  readingHobby = "Reading";
  userHobbies : string[]=[];
  favCountry = "India";

  favFruit = 'Apple';

  constructor() { }    //to inject dependancies

  //life cycle hooks 

  //functions
  //Data binding: It is a technique to link data between a component and the DOM. 
  //1.one way data binding 2.two way data binding
  //1.one way data binding :1.string interpolation 2.property binding 3.event binding
  //string interpolation:It is a one way data binding technique: .ts/model to dom/html/template {{}}

  learningInterpolation() {  //Void: default type of function 
    //return 'patil';
    return this.city2;

  }

  gen(data?: any) {
    console.log('data', data?.target.value);

  }

 hobbies(event : any){
  console.log(event.target.value);
  this.userHobbies.push(event.target.value);
  //this keyword use >> js : this key word is getting used inside object to point object's key
  //ts: this keyword is used to point global properties.
  //It is also used in functions to fetch value of global properties.
  console.log(this.userHobbies);
  console.log(this.favCountry);

  this.favCountry = 'Maletia';
  console.log(this.favCountry);
  this.gen();
 }

 fruit(){
  console.log(this.favFruit);
  this.learningInterpolation();
 }
}
