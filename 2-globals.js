
// GLOBALS - NO WINDOW
// Global variables - anywhere in your application you can access them so no matter how complex the application is

// (Below are global variables)
// __dirname - the path to current directory
// __filename - file name
// require() - the function to use or import modules (this is a CommonJS)
// module - is an info about the current module (file)
// process - is an info about env where the program is being executed (what port)



//example of calling the global variable __dirname
console.log(__dirname);
setInterval(()=> {
    console.log('hello world')
}, 1000)