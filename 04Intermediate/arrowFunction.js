// function isEven(element){
// if(element % 2 == 0){
//     return true;
// }
// return false;

// OR

// return element % 2 === 0; // this convert it into either true of false
// }

// OR 

// This is an arrow functions
// const isEven = (element) => {
//     return element % 2 === 0;
// }

// console.log(isEven(5));




// Callback functions
const isEven = [2, 6, 6, 8].every((e) => (e % 2 === 0));
console.log(isEven);