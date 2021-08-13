// Part 1 of 'this keyword'
console.log(this);

var game = "basketball";

function sayName(){
    var name = "Sailendra";

    console.log(this);
}

sayName();