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
        { name: 'poonam', age: 30 },
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