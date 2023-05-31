//* 9.) EVENT LOOP
// The event loop is what allows Node.js to perform non-blovcking I/O operations - despite the fact javascript is single-threaded.

// The event loop is a crucial concept in Node.js, as well as in other JavaScript environments. It's responsible for handling asynchronous operations and ensuring non-blocking behavior.

// In Node.js, the event loop is a loop that continually checks for pending events and executes their associated callbacks when appropriate. It enables Node.js to handle multiple concurrent operations efficiently without blocking the execution of other tasks.

// The event loop primarily comes into action when you use asynchronous functions in JavaScript or Node.js.

// When you invoke an asynchronous function, it typically registers a callback or returns a Promise that will be executed at a later time when the associated asynchronous operation completes. These asynchronous operations can include I/O operations, timers, network requests, and more.

// The event loop is responsible for managing the execution of these asynchronous callbacks. It continuously checks for pending events and triggers the associated callbacks when the events occur. This allows the asynchronous operations to run concurrently and ensures that the program remains responsive without blocking the execution of other tasks.

// event loop happens when we do asynchronous function

// The event loop in Node.js is crucial because it allows functions to run asynchronously, without blocking the execution of other tasks.

//Javascript os synchronous and single threaded

//*Example here javascript reads everything line by line
// console.log('first task');
// console.time();
// for (let i = 0; i < 1; i++){
//     console.log('Hey , everyone is waiting on me : ');
// }
// console.timeEnd();
// console.log('next task');

//* and here the example where we use asynchronous function where event loop happens
// console.log('first task');
// setTimeout(() => {
//     console.log('second task');
// }, 1000);
// console.log('next task');