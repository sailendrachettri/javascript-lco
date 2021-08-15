const User = require("./ClassJs");
// import User from './ClassJs';

const hitesh = new User("Sailendra", "sailendra9083@gmail.com");
// console.log(hitesh.getInfo());

hitesh.enrollCourse("ReactJS Bootcamp");
hitesh.enrollCourse("Angular Bootcamp");

// console.log(hitesh.getCourseList()); 

let courses = hitesh.getCourseList();

courses.forEach(course => {
    console.log(`The courses you've are ${course}`);
});



