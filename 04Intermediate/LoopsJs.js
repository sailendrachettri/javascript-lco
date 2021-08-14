// for(let i = 0; i <= 10; i++){
//     console.log(i);
// }

// const myStates = [
//     "Rajasthan",
//     "Delhi",
//     "Assam",
//     1947,
//     "Tamil Nadu",
//     "maharashtra"
// ]

// for(let i = 0; i < myStates.length; i++){
//     if(typeof myStates[i] !== 'string'){
//         continue;
//         // break;
//     }
//     console.log(myStates[i]);
// }

const myStates = [
    "Rajasthan",
    "Delhi",
    "Assam",
    1947,
    "Tamil Nadu",
    "maharashtra"
]

let i = 0;

// While and do-while loop

// while (i < myStates.length){
//     console.log(myStates[i]);
//     i++;
// }

do {
    console.log(myStates[i]);
    i++;
} while (i < myStates.length);