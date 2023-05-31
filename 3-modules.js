
//2.) MODULES
// Modules are packages or tools that we can use for our code
// Modules are encapsulated codes (only share minimum)
// CommonJS Library, every file in node is a module (by default)

// * ===EXAMPLE===
// NOTE: They are separated in different files



// * =================================  FILE: app.js ================================= 
// setting up a variable and importing/getting where the module is located by using require()
// when setting up our own module it must be start with dot (.) and followed by (/) slash
const names = require('./4-firstmodule-names');
const sayHi = require('./5-secmodule-functions');


sayHi('Darling');
sayHi(names.yssa); // using names. because they are in an object
sayHi(names.jeje);



// * ================================= FILE: 4-firstmodule.js ================================= 

// in this file we will create variables
// for names and other variables


// local - only for this file
const secret = "we are birdsu"

// share with the rest of application/global
const yssa = 'Yssa';
const jeje = 'Jeje';

// here creating our own module
// we will share the variables
module.exports = {yssa, jeje}


// *  === NOTES ===
// * module.exports - It allows you to export values (variables, functions, objects, etc.) from a module, making them accessible to other modules that require or import them.

// * this must be called in order for it to be access


// * =================================  FILE: 5-secmodule.js ================================= 
// in this file we will create a function taht will greet
// we will use es6 function

const sayHi = (name) => {
    console.log(`Hello there! ${name} :)`);
}

// creating our own module
// sharing the function
module.exports = sayHi;
