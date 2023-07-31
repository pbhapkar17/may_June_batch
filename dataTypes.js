// JavaScript has 8 Datatypes
//primitive data type:
// String.
// Number.
// Bigint.
// Boolean.
// Undefined.
// Null.
// Symbol.
// Object.
//nonprimitive:
//An object

//string : 'poonam'/"poonam11"/'2020': used when value is alphabets/alphnumeric/number as a string

var name = 'poonam';
console.log(name);

let address = 'A-903, Ng_canary,mumbai' 

//number : to store number data into avarible

let amount = 100000;
console.log(amount);
let amt = 105.232;
amount = 50000;
console.log(amount);

let a = 30 // = assigment operator ==? ===?

//boolean data type: true/false

let passed = true;
console.log(passed);

let xyz = 'true';  
console.log(xyz);

//typeof operator : defines type of data

console.log(typeof(passed));
console.log(typeof(xyz));
console.log(typeof(amount));

//undefined
let jk ;
console.log(jk);
console.log(typeof(jk));

//null data: data type of null : object
let cash = null;
console.log(cash);
console.log(typeof(cash));

//object:
//empty obj
//let studentData = {};
let studentData = {
    studentName : 'Om',
    age: 15,
    contact: 9898989898,
    city: 'Pune'
}

console.log(studentData);
console.log(typeof(studentData));

//empty array
//let list = [];
let list = ['i10','volvo','swift','audi'];
console.log(list);
console.log(typeof(list));


let savingAmount = BigInt('9999999999999999');
let amount2= 9999999999999999n;
console.log(amount2);
console.log(savingAmount);

let r = '99999999999999999';
console.log(r);

