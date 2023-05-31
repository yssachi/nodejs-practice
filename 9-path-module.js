
//4.) PATH MODULE
// - useful for file handling
// - the path module is a built-in module that provides utilities for working with file and directory paths. It helps in resolving and manipulating file paths in a cross-platform manner, regardless of the underlying operating system.


// creating variable and importing the path module
// note that variable can be named differently but to avoid confusion just stick to the default name
// here we must import the path module by using require()
const path = require('path');

// here we gonna use the path methods, function, and properties 
// you will see all of its properties/methods by simply put 'path.'


// * ======== PATH METHODS/PROPERTIES/FUNCTION =========


// 1. Path seperator
console.log(path.sep);


// 2. Path join - is a method wich joins a sequence of path segments
// - Concatenates multiple path segments together
// - it is more suitable for simple path concatenation, regardless of the path's absolute or relative nature.
// to see how it works we will create a folder and file in our visual studio code
// folder name: content
// sub folder name: subfolder
// file name in subfolder: test.txt

const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log(filePath);


// 3. Path basename
// - basename is use to retrieve the last portion of the file path
// example we want to retrieve the test.txt

const base = path.basename(filePath);
console.log(base);


// 4. Path resolve
// - it is a method that is used to resolve a sequence of paths or path segments into an absolute path. It returns the resolved absolute path by combining the provided paths or segments.
// - it is particularly useful when you need to obtain an absolute path or resolve relative paths accurately.
// -  you don't need to explicitly include the forward slash (/) or backslash (\) as path separators in the arguments. The path.resolve() method automatically handles the path separators based on the underlying operating system.

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);


