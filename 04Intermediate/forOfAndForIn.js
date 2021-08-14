// const names = ["Youtube", "Facebook", "Amazon", "Instagram"];

// for (const name of names) {
//     console.log(name);
// }

const symbols = {
    yt: "Youtube",
    ig: "Instagram",
    fb: "Facebook",
    lco: "LearnCodeOnline"
}

for(const symbol in symbols){
    console.log(`Key is ${symbol} and the value is ${symbols[symbol]}`);
}