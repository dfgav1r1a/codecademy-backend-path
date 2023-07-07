# Instructions

1. We have provided a front-end for testing out your routes throughout this lesson. To get it to display in each exercise, start your server (node app.js) and then refresh the browser to the right. A tool should appear that allows you to set request verbs, paths, and body information, and then make requests using that information. Use this tool to ensure your server is working as expected throughout this lesson, checking your server logs and examining the returned responses as you make changes.

2. Currently, each route logs a message with the HTTP method and a message that the request was received (i.e. 'GET Request Received'). Write a function logRequest that takes a single string parameter verb and logs a message formatted in the same fashion.

3. Replace the console.log calls that open each route and replace each with a call to logRequest. Pass in the method name for each route.

# II `app.use()`

1. After your logRequest function, there is an unfinished call to app.use(). Its callback will be called before every route. We’ll be moving the logging out of logRequest, so we no longer have access to the verb string. Since we can access the req object, however, we can use the req.method property which will always be equal to the verb of the request! Finish the app.use() callback by replicating the logging behavior of logRequest.

Don’t be afraid if your server no longer returns responses. We will fix this in the next exercise.

2. All the calls to logRequest should now be redundant. Remove them from every route, and remove the logRequest function itself.

3. Now we’ve removed a significant amount of code, but our routes aren’t returning responses, because something is still missing from our first app.use() call. Move on to the next exercise when you’re ready.

# III `next()`

1. Add a call to next after your logging statement so that the middleware will be executed before moving on to your routes.

# IV `app.use()`

1. We’re going to refactor all the logic that checks the existence of a jelly bean into a new middleware function. Currently, this logic is used in every route that begins with beans/:beanName and looks like this:

```JS
const beanName = req.params.beanName;
  if (!jellybeanBag[beanName]) {
    console.log('Response Sent');
    return res.status(404).send('Bean with that name does not exist');
  }
```

We check to see if the bean with the supplied name exists in jellybeanBag, and we send a 404 response if it does not. The return statement ensures that we break out of the middleware and don’t try any operations on a nonexistent jelly bean.

Create a new app.use call after your logging middleware. It should be called for all /beans/:beanName routes. You can leave the callback empty at this point.

2. Copy all the checking logic (from const beanName through the if statement) from a route into your middleware callback. Remove those lines from every route that uses them.

3. After the checking logic, we’re going to attach the correct bean object to the request by setting a bean property on the request (req.bean). Set it equal to the correct bean from the bean object. For good measure, also attach the bean name to the request as req.beanName.

After these properties are set, be sure to call next.

4. You can now remove the duplicate checking logic from all /beans/:beanName routes. To make sure that all your routes still work if we remove const beanName = req.params.beanName; from them, make sure that you use req.beanName any place where you need to access the bean by name. For instance, inside app.delete, you’ll have to change

```JS
jellybeanBag[beanName] = null;
```

to

```JS
jellybeanBag[req.beanName] = null;
```

Check your routes to make sure that they use req.beanName.

# V  `app.use()` multiple paths

1. Now we’ll add some more advanced middleware. You might have noticed that in each PUT and POST route, there is code that looks like this:

```js
let bodyData = '';
req.on('data', (data) => {
  bodyData += data;
});
req.on('end', () => {
  // ...
});
```

You don’t need to worry too much about how this code works right now since we’ll eventually be replacing it with a better solution, but it is used for combining the HTTP request body into a single string. The req.on('end' .. callback will be called once the whole request has been received. We are going to move this logic to middleware so that it attaches the body to the request object once it’s fully received and then calls next.

Open a new call to app.use below the previous middleware. Make sure that it matches all routes for '/beans/' and '/beans/:beanName' using the array of routes syntax. You can leave your callback function body empty for now.

2. Now, copy the lines from the bodyData variable declaration to the end of the first req.on call into your middleware callback.


Stuck? Get a hint
3. The next step will be a bit different from the routes that are already present. Add req.on('end', () => {}). Complete the callback by adding the following lines inside the body of the callback function:

```js
if (bodyData) {
  req.body = JSON.parse(bodyData);
}
```

This will parse the request body into a JavaScript object and attach it to the request object. Finish the middleware by calling next at the end of the req.on('end') callback function outside of the if statement.

4. Now to refactor! You can remove the lines

```js
let bodyData = '';
req.on('data', (data) => {
  bodyData += data;
});
```

from all your routes. Then you can remove the req.on('end' ...) method calls, but you’ll need to preserve the callback functions’ internal logic. You can simply remove the lines with req.on(... and the }); line at the end of the method call. Do this for all routes that have this duplicate code.

5. To finish refactoring, you can replace all instances of JSON.parse(bodyData) in the same routes and replace them with req.body since the body has already been parsed!

6. Great job, you removed duplicate code from four routes!

# VI Middleware Stack

1. Since we don’t need any request body for GET or DELETE routes, let’s refactor the behavior of our body-parsing middleware to use the in-route middleware stack. Start by saving the body-parsing middleware to a const variable bodyParser and removing the app.use call handling body parsing for ['/beans/', '/beans/:beanName'].

2. Now, insert the bodyParser as the first callback for all routes handling POST requests.

# VII Logging with Morgan instead

1. Require morgan at the top of the app where you import Express, and save it to a const morgan.

2. Replace your logging middleware with morgan('tiny').

3. Morgan will log response codes after the response is sent, so you can get rid of all the remaining console.log statements that log 'Response Sent'. At the end of this refactor, you should only have one console.log left in your code (inside app.listen).

# IX changing logging config

1. Morgan provides a number of pre-defined formats. Let’s change from using 'tiny' to one with a bit more information. We want one with the HTTP method, URL, status code, response time, content length, and one that changes colors of the status code output based on the code. Try to find the logging format that will create output as we expect and replace 'tiny' with that format name.

# X `body-parser`

1. Our bodyParser function is okay for now, but there are bound to be edge cases and all sorts of request bodies it can’t handle well. Let’s replace it with a well-maintained open-source package, body-parser. Require 'body-parser' at the top of the app in the same way, and save it to a const bodyParser.

2. Remove the bodyParser middleware that you previously wrote. You can also now remove it from the middleware stacks for all PUT and POST routes. bodyParser will automatically attach the parsed body object to req.body.

Open a new app.use call directly after your morgan logging middleware. bodyParser has multiple methods for returning middleware functions. For now, let’s use bodyParser.json() to parse all request bodies in JSON format.

# XI

1. Add a very simple error handler as the last handler in your file, immediately before app.listen. The callback function should have four arguments. It should set the status of the response equal to the status property of the error object if it exists or set it to 500 by default. Finally, your error handler should send back the error object’s message property.

If you want to see your errors in the terminal console as you test, log out the error or it’s message property inside your error handler.

2. Now, refactor the routes that send error responses (any that are greater than or equal to 400) to use this error handler. This means instead of a line like this

```js
return res.status(404).send('<error message>');
```

You should instead create a new Error with the correct error message, set its .status property, and then call next and pass in the error. Be sure to still return the next call so that the route/middleware callback breaks out and the error handler takes over.