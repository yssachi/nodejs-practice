
//* 7.) HTTP MODULE (Server Setup)
// allows us to set up a web server
// the http module is a built-in module that provides functionality for creating HTTP servers and making HTTP requests. The http module allows you to handle incoming HTTP requests and send outgoing HTTP requests.

// IMPORTING THE HTTP MODULE
const http = require('http');

// * ======== HTTP METHODS/PROPERTIES/FUNCTION =========


// 1.) http createServer
// here creating the server
// it has a callback function and 2 parameter which are the request and response
// res - incoming request from the client side (imagine a client is requesting from the web browser your webpage )
// res - outgoing response from the server (a response is what we're sending back to the client)
// note: req and res also have methods
//url - url property is going to tell us what address client is requesting / the endpoint client requesting

const server = http.createServer((req, res)=> {
    // request
    if(req.url === '/'){
        res.end('Welcome to the home page')
    }

    if(req.url === '/about'){
        res.end('This is the about page');
    }

    // when page not found
    res.end(`
    <h1>Page not found</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `)
    // response
    // res.write('Welcome to our home page')
    // res.end();
});

// here we put the port of where the browser is listening
server.listen(5000)