//string methods

let text = 'I live in Mumbai';
let textLength = text.length;
console.log('textLength',textLength);

//slice(start[inclusive], end[exclusive])

let a = text.slice(3,12);
console.log('a>>>',a);

let b = text.slice(-10,-5)  //slice(start[exclusive], end[inclusive])
console.log(b);


console.log(text.substring(6,-9)) //i live -9=0 , so 6 will be end index(0,6)

//substr(start index, length)

console.log(text.substr(2,9));

//replace

let r = 'Pune method replaces  a specified pune value with another pune value in a stringmethod replaces a specified value with another value in a string';

let q = r.replace(/pune/,'mumbai');
console.log(q);

let j = r.replace(/pune/g,'mumbai');
console.log(j);

let i = r.replace(/pune/i,'mumbai');
console.log(i);

let k = r.replace(/pune/gi,'mumbai');
console.log(k);

let p = r.replaceAll('pune','mumbai');
console.log(p);


//concat() or +
let FN = 'poonam';
let LN = 'patil';
let f_name = FN + " "+ LN;
console.log(f_name);

let F_name = FN.concat(' ', LN, ' ', 'Bhapkar');
console.log(F_name);

//toLowerCase()
let city = 'MumB KKKKKKai DFFFFF cvdfvfvfd ';
let city1 = city.toLowerCase();
console.log('city1 >>>', city1);

//toUpperCase()
let city2 = city.toUpperCase();
console.log('city2 >>>', city2);

//trim()
let name3 = '   poonam   ';

let name4 = name3.trim();
console.log('name4>>',name4);

//trimStart()
let name5 = name3.trimStart();
console.log('name5',name5);

//trimEnd()
let name6 = name3.trimEnd();
console.log('name6',name6);

//charAt()
let text5 = 'poonam patil';
console.log(text5.charAt(3));

//split() always return array

let dob = '04_04_1992';

let newDob = dob.split('_');
console.log(newDob);
console.log(newDob[2]);

let u = 'poonam A Patil';
let u2 = u.split(" ");
console.log(u2);
console.log(u2[0]);
console.log(u2[2]);

// String Search Methods
// String indexOf()
let d ='dog hhhg  gggg';
console.log(d.indexOf('g')); //first match ind
console.log('last ind', d.lastIndexOf('g')); //last match ind

let text2 = "Please locatekjkjkj where 'locate' occurs!";
console.log( text2.search("locate"))
console.log( text2.search(/locate/))

let text3 = "Please locatek jkjkjase whe asere 'locate' occurs!";
console.log(text3.match('ase'));
console.log(text3.match(/ase/));
console.log(text3.match(/ase/g));

let text4 = "Hello World, welcome to the universe.";
console.log(text4.includes("world"));

// let a1 = {
//     "employees": [
//         { "firstName": "John", "lastName": "Doe" },
//         { "firstName": "Anna", "lastName": "Smith" },
//         { "firstName": "Peter", "lastName": "Jones" }
//     ],
//     statusCode:2001,
//     successMsg:'Data saved succussfully'
// }


//startsWith()
let msg = 'hhhh 200 Success';
console.log(msg.startsWith('20'));

text7 = "John Doe";
console.log(text7.endsWith('e'));

text7 = "Jo Doe h Doen Doe";
console.log(Array.from(text7.matchAll('Doe')));