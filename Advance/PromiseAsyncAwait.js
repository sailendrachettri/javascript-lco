const uno = () => {
    return "I am one";
}

// const dos = async() => {
//     setTimeout(() => {
//          return "I am two";
//     }, 3000);
// }

const dos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("I am two");
        }, 3000);
    })
} 

const tres = () => {
    return "I am three";
} 

const callMe = async() => {

    let valueOne = uno();
    console.log(valueOne);

    let valueTwo = await dos();
    console.log(valueTwo);

    let valueThree = tres();
    console.log(valueThree);
}

callMe();