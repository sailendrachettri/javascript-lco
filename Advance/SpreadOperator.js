// Spread Operator
function sumOne(a, b) {
    return a + b;
}

let myA = [5, 4];
console.log(sumOne(...myA));


// REST Operator
function sumTwo(...args) {
    let sum = 0;

    for (const arg of args) {
        sum = sum + arg;
    }
    return sum;
}

console.log(sumTwo(1, 2, 3, 4, 3, 4, 3, 0, 2, 3, 4));

// Another for of REST Operator
function sumTwo(a, b, ...args) {
    console.log(args); // first two values are ignored in this args
    let sum = 0;
    let mult = a * b;

    for (const arg of args) {
        sum = sum + arg;
    }
    return [mult, sum];
}

console.log(sumTwo(3, 2, 1, 4, 1, 1));