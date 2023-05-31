
// so in this mind grenade we will not setup the module exports
// so this is an alternative way
// only use if we have a function executed in this

const num1 = 5;
const num2 = 10;

const addValues = () =>{
    console.log(`The sum of ${num1} and ${num2} is ${num1 + num2}`);
} 

addValues(); // this is the function executed in this file


// * =========FILE: app.js ===========
// here in app.js we can simply call the require function
// require('./7-mind-grenade');

