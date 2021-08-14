// Borrow a method using bind

const hitesh = {
    firstName: "Hitesh",
    lastName: "Choudhary",
    role: "Admin",
    courseCount: 3,
    getInfo: function () {
        console.log(`
            First name is ${this.firstName}
            Last name is ${this.lastName}
            His role is ${this.role}
            and he is studing ${this.courseCount} courses
        `);
    }
}


const dj = {
    firstName: "Rock",
    lastName: "DJ",
    role: "SubAdmin",
    courseCount: 4
}

hitesh.getInfo();