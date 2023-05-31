
//* 5.) FS MODULE (SYNC)
// FS - File System
// SYNC - operations are executed in a step-by-step order / blocking
// the fs module is a built-in module that provides file system-related operations, allowing you to interact with the file system of your operating system. Example are reading, creating, deleting, and writing a file or folder.
// The synchronous version of the fs module allows you to perform file system operations in a blocking manner, meaning the code execution will pause until the operation is completed. These synchronous methods are useful in scenarios where you need to perform file system operations sequentially or when you want to ensure that the execution order is strictly maintained.


// creating variable and importing the fs module
// note that variable can be named differently but to avoid confusion just stick to the default name
// here we must import the path module by using require()
// const fs = require('fs');

// we will use this instead to show different ways to access methods
// we don't input the variable when we were calling the method
const { readFileSync, WriteFileSync, writeFileSync } = require('fs');

// here we gonna use the path methods, function, and properties 
// you will see all of its properties/methods by simply put 'fs.'

// to show how it works we create files in the content folder
// filename: first.txt
// filename: second.txt


// * ======== FS METHODS/PROPERTIES/FUNCTION =========

// 1.) readFileSync
// create a variable first and second
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first, second);

// 2.) writeFileSync
// it create a new file
// flag is only an example
writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`, { flag: 'a' }, 'utf8');
// the result-sync.txt file is now added to the content folder