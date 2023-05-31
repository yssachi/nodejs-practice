//3.) OS MODULE
// OS - Operating System
// the os module is a built-in module that provides a set of operating system-related utility methods and properties. It allows you to interact with various aspects of the operating system, such as gathering information about the computer's architecture, network interfaces, operating system platform, and more.

// creating variable and importing the os module
// note that variable can be named differently but to avoid confusion just stick to the default name
// here we must import the os module by using the require()
const os = require('os');


// here we gonna use the os methods, function, and properties 
// you will see all of its properties/methods by simply put 'os.'

// * ======== OS METHODS/PROPERTIES/FUNCTION =========


// 1. Info about current user
const user = os.userInfo();
console.log(user);


// 2.  System uptime in seconds
const uptime = os.uptime();
console.log(`The System Uptime is ${uptime} seconds`);


// 3. Current operating system
// here will see bunch of os methods
const currentOS =  {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS);

