var User = function(firstName, courseCount) {
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function(){
        console.log(`course count is ${this.courseCount}`);
    };
};

var hitesh = new User('Hitesh', 2);
console.log(hitesh);

var sam = new User("Sam", 2);
console.log(sam);