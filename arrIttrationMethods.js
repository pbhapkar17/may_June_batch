//forEach
let cars = ['i10','i20','swift','jaguar','audi'];
let newCars = [];

for(let i = 0 ;i < cars.length ; i++){    //cars.length =>5
    newCars.push(cars[i])
}
console.log('newCars',newCars);

let newCars1 = []
cars.forEach(ele => {
    newCars1.push(ele)
})
console.log('newCars1',newCars1);

//spread operator (... )The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.
let newCar2 = [...cars];
console.log('newCar2',newCar2);


//function syntax: function funName(){//code block}
function test() {
    //code block
    //map
    let employee = [
        { name: 'poonam', age: 80 },
        { name: 'pooja', age: 30 },
        { name: 'om', age: 30 },
        { name: 'jay', age: 30 }
    ]

    let empolyeeNames = employee.map(employeeData => {
        return employeeData.name;
    })
    // let empolyeeNames =[];
    //  employee.map(employeeData=>{
    //     empolyeeNames.push(employeeData.name);
    //  })


    console.log('empolyeeNames', empolyeeNames);
}

function cascading(){
console.log('casading calling....');
test();
}



function addition (){ //parameterless func
    let result = 30 + 60;
    console.log(result); //90
}
let a = 'poonam' ;
let result1 = function addition1(){
  return  a;  //return will return value,
  console.log('poonam....');//unreachable code block
}

function substaraction(a,b){  //a,b parametres/argument parametrised fun
  return a-b;
}

 let res = substaraction(150,90);

//normal fun
//  let result3 = function multi(){
//          return 90;
//  }

//  let result3 = function (){
//     return 90;
// }

// let result3 =  ()=>{
//     return 90;
// }

let result3 = ()=>90;

console.log(result3);


let num = [10,20,30,50,6,999];
let num3= [];
num.forEach(item =>{
  if(item != 50){
    num3.push(item)
  }
})
console.log(num3);

//JSON
let stringifyedData = JSON.stringify(employee1)
console.log("stringifyedData",stringifyedData)
let parsedData = JSON.parse(stringifyedData)
console.log('prsedData',parsedData.ename);


//shallow copy :
let a1 = ['a','ab','hh'];
let b1 = a1;
console.log('b1',b1);
b1[2] = 'patil';//['a,'poonam,'hh]
 
 console.log('b1',b1);
 console.log('a1',a1);

 //deep copy 
 const originalArray = [{name: 'John'}, {name: 'Jane'}, {name: 'Mike'}];
 const deepCopy = JSON.parse(JSON.stringify(originalArray));
 
 originalArray[0].name = 'Modified';
 
 console.log(originalArray); // Output: [{name: 'Modified'}, {name: 'Jane'}, {name: 'Mike'}]
 const deepCopy1 = JSON.parse(JSON.stringify(originalArray));
 console.log(deepCopy1);

 let employee = {
  eid: "E102",
  ename: "Jack",
  eaddress: "New York",
  salary: 50000
}

console.log("Employee=> ", employee);
let newEmployee = employee;    // Shallow copy
console.log("New Employee=> ", newEmployee);

console.log("---------After modification----------");
newEmployee.ename = "Beck";
console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);
// Name of the employee as well as
// newEmployee is changed.


let employee1 = {
  eid: "E102",
  ename: "Jack",
  eaddress: "New York",
  salary: 50000
}

console.log("=========Deep Copy========");
let newEmployee1 = JSON.parse(JSON.stringify(employee1));
console.log("Employee=> ", employee1);
console.log("New Employee=> ", newEmployee1);
console.log("---------After modification---------");
newEmployee1.ename = "Beck";
newEmployee1.salary = 70000;
console.log("Employee=> ", employee1);
console.log("New Employee=> ", newEmployee1);