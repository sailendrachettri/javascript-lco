// Part 1 of 'this keyword'
// console.log(this);

// var game = "basketball";

// function sayName(){
//     var name = "Sailendra";

//     console.log(this);
// }

// sayName();


var user = {
    firstname: "Sailendra",
    courseCount: 4,
    getCourseCount: function(){
        console.log("Line 19", this);
        function sayHello(){
            console.log("hello");
            console.log('line 22 this', this);
        }
        sayHello();
    }
}

user.getCourseCount();