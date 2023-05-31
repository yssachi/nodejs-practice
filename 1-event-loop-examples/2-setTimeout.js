// setTimeout is asynchronous
// asynchronous get offloaded

// started operating system process
console.log('first task');
setTimeout(() => {
    console.log('second task');
}, 1000);
console.log('next task');
// completed and exited operating system process