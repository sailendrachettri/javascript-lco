var user = "admin";

switch (user) {
    case "admin":
        console.log("You got full access");
        break;

    case "subadmin":
        console.log("You got sub access");
        break;

    case "testprep":
        console.log("Prepare for test");
        break;

    case "user":
        console.log("Only consume and add some comment");
        break;

    default:
        console.log("Who are you man?");
        break;
}