// * ENTRY POINT & END POINT

// The entry point file is responsible for setting up the necessary configurations, dependencies, and structure of your Node.js application. It typically imports required modules, initializes the server or application framework, sets up middleware, establishes database connections, and defines the overall structure of your application.

// On the other hand, endpoints are specific URLs or routes that define the functionality and behavior of your application's API. They are where you handle incoming HTTP requests, perform operations, access databases, and return appropriate responses. Endpoints are responsible for processing and responding to client requests, executing business logic, interacting with data, and performing any necessary operations based on the specific request.

// In summary, the entry point file is responsible for getting your application ready by setting up the necessary infrastructure, while endpoints define the specific functionality and actions that your application should perform when handling HTTP requests from clients.


// * BUILT-IN MODULES
// OS
// PATH
// FS
// HTTP

// * HTTP
// In Node.js, the http module is a built-in module that provides functionality for creating HTTP servers and making HTTP requests. The http module allows you to handle incoming HTTP requests and send outgoing HTTP requests.

// When it comes to handling HTTP requests, there are several commonly used HTTP methods, also known as HTTP verbs, that define the type of operation to be performed on the specified resource. These HTTP methods indicate the desired action to be performed by the server.

// Here are some of the most commonly used HTTP methods in Node.js:

// GET: The GET method is used to retrieve or fetch data from a specified resource. It is the most common HTTP method used for fetching web pages, APIs, or any other resources from a server. For example, when you enter a URL in your browser, it typically sends a GET request to retrieve the web page.

// POST: The POST method is used to submit or send data to be processed by the server. It is commonly used when submitting forms or sending data to APIs to create or update resources on the server.

// PUT: The PUT method is used to update or replace an existing resource on the server. It sends the entire representation of the resource to be updated.

// PATCH: The PATCH method is used to partially update an existing resource on the server. It sends only the changes or updates to be applied to the resource.

// DELETE: The DELETE method is used to delete or remove a specified resource on the server.

// These HTTP methods are used in conjunction with the http module in Node.js to handle incoming requests on an HTTP server or to make outgoing requests to other servers.