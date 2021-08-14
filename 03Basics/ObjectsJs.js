var User = {
    name: "",
    getUserName: function(){
        console.log(`user name is ${this.name}`);
    },
};

var hitesh = Object.create(User);
hitesh.name = "Sailendra Chteri";
hitesh.getUserName();
console.log(hitesh);

var sam = Object.create(User, {
    name: {value: "Sammy"},
    courseCount: {value: 3},
})

sam.getUserName();