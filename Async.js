/* 
js is the dynamically typed language because the type of variable determine during run time not the compile 
time and changes as the programe executes.

Variables in JavaScript do not require explicit type declarations. 
 can assign different data types (e.g., a string, then a number) to the same variable without 
 causing an error.

JavaScript is fundamentally synchronous and single-threaded by nature, but it uses mechanisms within its
runtime environment to handle asynchronous tasks. 

Synchronous Nature of JavaScript:
By default, JavaScript code runs sequentially in a single thread called the call stack. This means: 
Each operation must complete its execution before the next line of code can run.

Code execution is blocking; if a function takes a long time (e.g., a complex calculation), 
the entire program waits,potentially freezing the user interface in a browser environment. 


How Asynchronicity is Achieved:

The language itself provides constructs like Promises and async/await syntax to
 manage asynchronous operations, but the actual non-blocking behavior is facilitated by the JavaScript 
 runtime environment (like a web browser or Node.js). 

The runtime environment provides Web APIs (e.g., setTimeout, fetch,
 event listeners for clicks/network requests) that can run operations in the background, off the main thread. 

When an asynchronous function is called, it is passed to a Web API,
allowing the main JavaScript thread to continue executing other code immediately.
Once the background task is complete, a callback function is placed
into a callback queue or microtask queue.

An event loop constantly checks if the main call stack is empty. If  it is, it pushes tasks from the queues
onto the main stack for execution, ensuring that only one piece of JavaScript code runs at a time.


Single threaded: it means one task perform at a time it makes a languae simple and easy to debug but not
                 suitable for complex tasks. ex.: js

Multithread: multiple tasks perform parallely and handle complex tasks better responsivesness. c++, java.

Blocking code v/s Non blocking which is better depend on use cases.

 

  



*/