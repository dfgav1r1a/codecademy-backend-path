In order to understand why Node uses error-first callbacks in many of its asynchronous APIs, let’s demonstrate that traditional try...catch statements won’t work for errors thrown during asynchronous operations.

In naiveAsyncErr.js, we require in the local api.js module which contains the api.naiveErrorProneAsyncFunction() method. This asynchronous method throws an error whenever it is passed the input 'problematic input'. We would want the try...catch statement in naiveAsyncErr.js to catch this error, but it cannot since the error is thrown asynchronously.

1. In the terminal, execute the naiveAsyncErr.js file. You’ll see that the intended output, Something went wrong. ${err}\n, wasn’t logged— meaning that the error was never caught.

2. Now take a look at app.js. Here we wrote an error-first callback function. This callback does the error handling so there’s no need for a try...catch statement. This is how most Node asynchronous APIs are set up to handle errors. In app.js we require in the api.js module. This time, we’ll use an asynchronous method, api.errorProneAsyncApi(), designed to work like the asynchronous methods in Node.

At the botton of app.js, invoke the api.errorProneAsyncApi() method with 'problematic input' as the first argument and the error-first callback as the second.

3. Let’s run app.js in the terminal so we can see how it properly handles the error created during the asynchronous operation.