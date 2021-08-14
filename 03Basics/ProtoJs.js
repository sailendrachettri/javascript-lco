var User = function (firstName, courseCount) {
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function () {
        console.log(`course count is ${this.courseCount}`);
    };
};

User.prototype.getFirstName = function () {
    console.log(`Your firstname is ${this.firstName}`);
}

var hitesh = new User('Hitesh', 2);
hitesh.getCourseCount();

if (hitesh.hasOwnProperty("firstName")) {
    hitesh.getFirstName();
}

var sam = new User("Sam", 5);
sam.getCourseCount();
sam.getFirstName();