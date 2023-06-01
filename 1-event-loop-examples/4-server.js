
const http = require('http');

const server = http.createServer((req, res)=>{
    console.log('request sent');
    res.end('Hello World');
});

server.listen(5000, () => {
    console.log('Server listening on port: 5000....');
});

// .listen is asynchronous