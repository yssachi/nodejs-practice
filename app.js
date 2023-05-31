// app.js is our main server file it can also be sometime named as server.js
// this is the entry point of our website
// entry point means this is where the execution oc code starts
// this is where we also setup our route handling for defining routes and their corresponding handlers.
// route handling are use when multiple users accessing different page of the website

/** SOME INFORMATION **/

//* 1.) GLOBALS - NO WINDOW
// Global variables - anywhere in your application you can access them so no matter how complex the application is

// __dirname - the path to current directory
// __filename - file name
// require() - the function to use or import modules (this is a CommonJS)
// module - is an info about the current module (file)
// process - is an info about env where the program is being executed (what port)


//* 2.) MODULES
// Modules are packages or tools that we can use for our code
// Modules are encapsulated codes (only share minimum)
// CommonJS Library, every file in node is a module (by default)


//* 3.) OS MODULE
// OS - Operating System
// the os module is a built-in module that provides a set of operating system-related utility methods and properties. It allows you to interact with various aspects of the operating system, such as gathering information about the computer's architecture, network interfaces, operating system platform, and more.


//* 4.) PATH MODULE
// useful for file handling
// the path module is a built-in module that provides utilities for working with file and directory paths. It helps in resolving and manipulating file paths in a cross-platform manner, regardless of the underlying operating system.


//* 5.) FS MODULE (SYNC)
// FS - File System
// SYNC - operations are executed in a step-by-step order / blocking
// the fs module is a built-in module that provides file system-related operations, allowing you to interact with the file system of your operating system. Example are reading, creating, deleting, and writing a file or folder.
// The synchronous version of the fs module allows you to perform file system operations in a blocking manner, meaning the code execution will pause until the operation is completed. These synchronous methods are useful in scenarios where you need to perform file system operations sequentially or when you want to ensure that the execution order is strictly maintained.


//* 6.) FS MODULE (ASYNC)
// FS - File System
// ASYNC - non-blocking
//  the fs module is a built-in module that provides file system-related operations, allowing you to interact with the file system of your operating system. The fs module provides both synchronous and asynchronous versions of its methods, and the asynchronous methods are generally preferred in Node.js applications.
// The asynchronous version of the fs module allows you to perform file system operations in a non-blocking manner, meaning that the code execution does not pause while the operation is being performed. Instead, the operation is initiated, and a callback function or a Promise is used to handle the result or any errors once the operation is completed.
// example syntax => fs.readFile(path[, options], callback)


//* 7.) HTTP MODULE (Server Setup)
// allows us to set up a web server
// the http module is a built-in module that provides functionality for creating HTTP servers and making HTTP requests. The http module allows you to handle incoming HTTP requests and send outgoing HTTP requests.


//* 8.) NPM COMMAND
// npm - global command, comes with code
// npm -v (npm version)

// => local dependency - use it only in this particular object
// npm i <packageName>

// => global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file ( stores important info about project/package)
// manual approach (create package.json in the root, create properties etc.)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)



//showcasing what lodash do
// importing lodash package
// const _ = require('lodash');
// const items = [1, [2, [3, [4]]]];
// const newItems = _.flattenDeep(items);
// console.log(newItems);
// console.log('hello world')

// when we upload this folder to github node_modules will not be able to download by the user because it is in gitignore
// when uploading, node_modules should not be included because it has many files
// if ever they download the folder and to be able to access the node_module what they need to do is to 'npm install' so that the node_modules for a specific package will be installed


//here is the command for dev dependencies
// npm i nodemon -D
// after installing go to package.json
// in script type this ==>
// "start" : "node app.js",
// => type in terminal 'npm start
// "dev": "nodemon app.js"
// => type in terminal 'npm run dev'

//to uninstall package
// => npm uninstall <packagename>
// ex: npm uninstall lodash 



//* 9.) EVENT LOOP
// The event loop is what allows Node.js to perform non-blovcking I/O operations - despite the fact javascript is single-threaded.

// The event loop is a crucial concept in Node.js, as well as in other JavaScript environments. It's responsible for handling asynchronous operations and ensuring non-blocking behavior.

// In Node.js, the event loop is a loop that continually checks for pending events and executes their associated callbacks when appropriate. It enables Node.js to handle multiple concurrent operations efficiently without blocking the execution of other tasks.

// The event loop primarily comes into action when you use asynchronous functions in JavaScript or Node.js.

// When you invoke an asynchronous function, it typically registers a callback or returns a Promise that will be executed at a later time when the associated asynchronous operation completes. These asynchronous operations can include I/O operations, timers, network requests, and more.

// The event loop is responsible for managing the execution of these asynchronous callbacks. It continuously checks for pending events and triggers the associated callbacks when the events occur. This allows the asynchronous operations to run concurrently and ensures that the program remains responsive without blocking the execution of other tasks.

// event loop happens when we do asynchronous function

//Javascript os synchronous and single threaded

