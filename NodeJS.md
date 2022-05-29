1:What is node.js?
Node. js (Node) is an open source development platform for executing JavaScript code server-side. Node is useful for developing applications that require a persistent connection from the browser to the server and is often used for real-time applications such as chat, news feeds and web push notifications. Node.

2:How is node js non-blocking?
A non-blocking call in JavaScript provides a callback function that is to be called when the operation is complete. Node.js internally uses operating system level polling in combination with worker threads for operations that do not support polling. Node then translates these mechanisms into JavaScript callbacks.

3:What is throughput?
A computer term for the volume of work or information flowing through a system. Particularly meaningful in information storage and retrieval systems, in which throughput is measured in units such as accesses per hour.

4:What are CPU intensive tasks?
They are complex user actions that eat up more RAM. A few of such processes can shut down your server entirely. Naturally, you want to make sure that your app or website is 'smart' enough to handle different kinds of tasks, for each individual user request.

5:What is the event loop?
The event loop is the secret behind JavaScript’s asynchronous programming. JS executes all operations on a single thread, but using a few smart data structures, it gives us the illusion of multi-threading call stack-The call stack is responsible for keeping track of all the operations in line to be executed. Whenever a function is finished, it is popped from the stack. event queue-The event queue is responsible for sending new functions to the stack for processing. It follows the queue data structure to maintain the correct sequence in which all operations should be sent for execution. Web Api -Whenever an async function is called,it is sent to a browser API. These are APIs built into the browser. Based on the command received from the call stack, the API starts its own single-threaded operation.

6:what is process.tick?
Every time the event loop takes a full trip, we call it a tick. When we pass a function to process.nextTick(), we instruct the engine to invoke this function at the end of the current operation, before the next event loop tick starts

7:When can process.tick starve your event loop?
Looking back at our diagram, any time you call process.nextTick() in a given phase, all callbacks passed to process.nextTick() will be resolved before the event loop continues. This can create some bad situations because it allows you to "starve" your I/O by making recursive process.nextTick() calls, which prevents the event loop from reaching the poll phase.

8:difference bitween setInterval and setTimeOut?
setTimeout allows us to run a function once after the interval of time. setInterval allows us to run a function repeatedly, starting after the interval of time, then repeating continuously at that interval.

9:How does your Node.js application handle scale? Elaborate?
The easiest thing to do to scale a big application is to clone it multiple times and have each cloned instance handle part of the workload (with a load balancer, for example). This does not cost a lot in term of development time and it's highly effective. This strategy is the minimum you should do and Node

10:What are CORS? How do you configure them? Why do you need them?
Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.

11:What is rate limiting?
Rate limiting blocks users, bots, or applications that are over-using or abusing a web property. Rate limiting can stop certain kinds of bot attacks.

12:How does middlewares work in express?
Advantages of using middleware:

Middleware can process request objects multiple times before the server works for that request.
Middleware can be used to add logging and authentication functionality.
Middleware improves client-side rendering performance.
Middleware is used for setting some specific HTTP headers.
Middleware helps for Optimization and better performance.

13:What is the difference between https and http?
HTTPS is HTTP with encryption. The only difference between the two protocols is that HTTPS uses TLS (SSL) to encrypt normal HTTP requests and responses. As a result, HTTPS is far more secure than HTTP. A website that uses HTTP has http:// in its URL, while a website that uses HTTPS has https://.

14:What is the difference between JS on the browser and node?
JavaScript is a simple programming language that runs in any browser JavaScript Engine. Whereas Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses, it requires libraries that can easily be accessed from JavaScript programming for better use.

15:What is V8?
V8 is Google's open source high-performance JavaScript and WebAssembly engine, written in C++. It is used in Chrome and in Node.js, among others.
