var getUserRole = function (name, role) {
    switch (role) {
        case "admin":
            return `${name} is admin with all access`;
        // break; NO NEED TO PUT THIS BREAK, IT IS USELESS

        case "subadmin":
            return `${name} is subadmin with access to create/delete courses`;
        // break; NO NEED TO PUT THIS BREAK, IT IS USELESS

        case "testprep":
            return `${name} is testperp access to create/delete testprep`;
        // break; NO NEED TO PUT THIS BREAK, IT IS USELESS

        case "user":
            return `${name} is user can consume content`;
        // break; NO NEED TO PUT THIS BREAK, IT IS USELESS

        default:
            return `${name} is guest`
        // break; NO NEED TO PUT THIS BREAK, IT IS USELESS
    }
}

const result = getUserRole('Sailendra', 'user'); 
console.log(result);