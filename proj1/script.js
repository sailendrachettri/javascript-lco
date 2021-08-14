var counter = document.getElementsByClassName('counter')[0];
var followers = document.getElementsByClassName('followers')[0];

let count = 1;

setInterval(() => {
    if (count < 1000) {
        count++;
        counter.innerText = count;
    }
}, 1) // this number means milisecons

setTimeout(() => {
    followers.innerText = "Followers in LinkedIn";
}, 5000)


