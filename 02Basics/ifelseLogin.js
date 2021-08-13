var isLoggedIn = true;
var isEmailVerified = true;
var cardInfo = true;

// if (isLoggedIn){
//     console.log("Logged in success");

//     if(isEmailVerified){
//         console.log("Email is verified");

//         if(cardInfo){
//             console.log("You can make a purchase");
//         }
//     }
// }

// OR

if (isLoggedIn && isEmailVerified && cardInfo) {
    console.log("You can make a purchase");
} else{
    console.log("You are not allowed to that");
}