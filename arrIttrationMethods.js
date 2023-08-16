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
