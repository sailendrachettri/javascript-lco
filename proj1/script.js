var counter = document.getElementsByClassName('counter')[0];
var followers = document.getElementsByClassName('followers')[0];

let count = 1;

setInterval(() => {
    if (count < 100) {
        count++;
        counter.innerText = count;
    }
}, 50) // this number means milisecons

setTimeout(() => {
    followers.innerText = "Completed Javascript course.";
    counter.innerText = "100 %"

}, 5000)


