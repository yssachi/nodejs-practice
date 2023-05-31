//* 6.) FS MODULE (ASYNC)
// FS - File System
// ASYNC - non-blocking
//  the fs module is a built-in module that provides file system-related operations, allowing you to interact with the file system of your operating system. The fs module provides both synchronous and asynchronous versions of its methods, and the asynchronous methods are generally preferred in Node.js applications.
// The asynchronous version of the fs module allows you to perform file system operations in a non-blocking manner, meaning that the code execution does not pause while the operation is being performed. Instead, the operation is initiated, and a callback function or a Promise is used to handle the result or any errors once the operation is completed.
// example syntax => fs.readFile(path[, options], callback)

// Importing module
// const fs = require('fs');
const { readFile, writeFile} = require('fs');



// * ======== FS METHODS/PROPERTIES/FUNCTION =========

// readFile and writeFile
// ()=>{}  this is  a callback function with 2 arguments: err, result
// note: if we don't put utf8 then we may get buffer (numbers)
readFile('./content/first.txt', 'utf8', (err, result)=> {
    //checking first the error
    if (err){
        console.log(err);
        return;
    }

    // if successful we assign this
    const first = result;


    //for second.txt
    readFile('./content/second.txt', 'utf8', (err, result)=> {
        if (err){
            console.log(err);
            return;
        }
        const second = result;

        // it must also have a callback
        writeFile('./content/result-async.txt', `Here is the result: ${first}, ${second}` , (err, result) => {
            if (err) {
                console.log(err);
                return;
            }

            console.log(result);

        })
    })

})




// * ==== MY PRACTICE ====

// const fs = require('fs');

// fs.readFile('./content/first.txt', 'utf8', function(err, data) {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(data);
// })

// fs.writeFile('./content/practice.txt', 'This is a practice', 'utf8', (err, data)=> {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(data);
// })