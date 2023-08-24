//JavaScript spread operator (...)
//The JavaScript spread operator (...) allows us to quickly copy all 
//or part of an existing array or object into another array or object.
let no = [10,20,30,60,30,55,44];
let no1 = [...no];
console.log(no1);

//part copy
let no2 = [10, 20, 30, 60, 30, 55, 44];
let [a, b, c, ...d] = no2;
console.log('a',a);
console.log('b',b);
console.log('c',c);
console.log('d',d);
 
//spread operator on obj: do not use on obj
let carDetails = { 
    carName : "Swift",
    color: "white",
    price: 800000,
    tpermite: true,
    dis:656565
}
let  carDetails3 = { 
    carName : "mini cup",
    color: "white",
    price: 90000,
    tpermite: false,
    discount:20000
}
let carDetail2 = {...carDetails};
console.log(carDetail2);

let car4 = {...carDetails, ...carDetails3};

console.log(car4);


word = "MAHARASABBAHTRA Mumbai";
originalWord = word.toLowerCase();// maharasabbahtra mumbai
console.log('originalWord',originalWord);
finalString ='';
for(let i = 0 ; i < this.originalWord.length ; i++){
    const char = originalWord[i];
    if(!finalString.includes(char)){
        finalString += char; //x+=4 => x=x+4;  FS=""+m FS=> m ; 2nd: Fs= FS(m) + a=> ma
    }
}
console.log('finalString',finalString);

//In JavaScript, the this keyword refers to an object.
let carDetails5 = { 
    carName : "Swift",
    color: "white",
    price: 800000,
    tpermite: true,
    dis: function (){
        return this.price;
    }
}
console.log(carDetails5.dis());

function test(){
    test2()
}

function test2(){
    console.log('test2....');
}

console.log(test());  //cascading calling function


// The "this" keyword is used in JavaScript to refer to the current object or context in which the code is being executed.
// Here are a few ways in which the "this" keyword is commonly used in JavaScript:
// Inside a method of an object - When used within a method of an object, "this" refers to the object itself. It allows accessing the object's properties and methods from within the method.
// Function invocation - When a function is invoked in a normal function invocation pattern (not as a method of an object), "this" by default refers to the global object (e.g., the window object in a browser or the global object in Node.js).
// Constructor functions - When used inside a constructor function, "this" refers to the object being created by that constructor. It allows setting properties and invoking methods specific to the newly created object.
// Callback functions - When a function is used as a callback function, the value of "this" inside the callback function depends on how the function is invoked. It can vary based on the context in which the callback function is called.
// Note: It's important to understand that the value of "this" is not determined by where the function is defined but rather by how the function is invoked.

//callBackfunction : in function we can pass another func as a parameter

function addition(a,b,sub){
   console.log(a,b,sub);
}

function substaraction(){
   10 //50
}

console.log(addition(10,20,substaraction)); //callBack fun


 function add4(add1,add2){
     return (add1+add2); 
    }
 
     console.log(add4())


     let emp = [
        { name: 'poonam', age: 80 },
        { name: 'pooja', age: 30 },
        { name: 'om', age: 30 },
        { name: 'jay', age: 30 },
        [40,20,[80,800,8000,[9,99,63]]]
    ]

    console.log(emp);
    console.log(emp[0].name);
    console.log(emp[4][2][3][0]);