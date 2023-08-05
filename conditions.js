//conditions: if, if-else, else-if,switch

// if(){
//   //code block 
// }

// if(){
//   //code block 
// }else{}

let a = 10;
let b = 20;
//if condition: 
if (a < b) {
    console.log('a is small');
}


//if - else condition
if(a > b){
    console.log('a is small');
}
else{
    console.log('a is big'); 
}

a > b ? console.log('a is big') :  console.log('a is small');

//else-if -If want to check more than 2 conditions 
if(a == b){
console.log('a and b are equal');
}
else if( a < b){
    console.log('a is smaller that b');
}
else if(b > a){
    console.log('b is greater that a');
}
else{
   console.log('else block'); 
}

let color = 'black1';

switch (color) {

    case 'blue':
        console.log('color is is blue');
        break;

    case 'black1':
            console.log('white');
            // break;

    case 'white':
        console.log('white');
        // break;

     case 'pink':
        console.log('white');
          break;

    default:
        console.log('no match');
       
}