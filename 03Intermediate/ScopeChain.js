// Note: sayNameTwo() get name from sayName() but if the sayName() doesn't have his own name the sayNameTwo() can ask above as much he can.

var name = "Hitesh";

console.log("Line number 3", name);

function sayName(){
    // var name = "Mr. H";
    console.log("Line number 6 ", name);

    sayNameTwo();
    function sayNameTwo(){
        // var name = "Mr. HC"
        console.log("Line number 10 ", name);
    }
}

sayName();