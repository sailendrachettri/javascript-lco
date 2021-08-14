// var user = {
//     firstName: 'Sailendra',
//     lastName: 'Chettri',
//     role: 'Admin',
//     loginCount: 34,
//     facebookSignedIn: true,
//     courselist: [],
//     buyCourse: function (courseName) {
//         this.courselist.push(courseName); // main uses of 'this' keyword
//     },
//     getCourseCount: function () {
//        return `${this.firstName} is enrolled in total of ${this.courselist.length} course`
//     },
//     info: function (){
//         return `${this.firstName} ${this.lastName} is an ${this.role}. ${this.firstName} loggedin ${this.loginCount} times so far. ${this.firstName} is loggedin via facebook is ${this.facebookSignedIn} and has ${this.courselist.length} courses.`
//     }
// };

// // console.log(user.getCourseCount());

// user.buyCourse("React js course");
// user.buyCourse("mongodb course");

// // console.log(user.getCourseCount());
// console.log(user.info());