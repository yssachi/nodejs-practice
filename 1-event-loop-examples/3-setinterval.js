// setInterval: It is a function that schedules the repeated execution of a callback function at a specified interval. 
// it runs in increment

setInterval(() => {
    console.log('hello world');
}, 2000)
console.log('I will run first');
// process stays alive unless
// kill process ctrl + c
// unexpected error