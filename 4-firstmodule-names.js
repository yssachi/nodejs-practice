
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
