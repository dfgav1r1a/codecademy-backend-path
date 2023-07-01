# Instructions

1. Now that your server starting code should be working properly, you can start up the Express Yourself machine. Start your server from the terminal window with node app.js. Once it logs that it is running, you can refresh the browser window currently displaying Not Found.

Inside app.js, create a route handler to handle a GET request to '/expressions'. For now, give it a req, res, next callback. For now, log the req object inside the callback. Verify that the route works and logs the request by starting your server and clicking the Refresh Expressions button which will send a GET /expressions request.

We will complete this route in the next exercise and finish the first round of functionality to the Express Yourself machine.

You may notice that there’s a line with the command app.use(express.static('public'));. This is used to make sure that once the server is started, you can reload the browser and see the Express Yourself machine.

2. Send the expressions array from your `app.get()` handler. Now that you have a complete route, you can test it out by reloading the browser window and clicking the ‘Refresh Expressions’ button on the machine.

If you make changes to app.js, you will need to restart your server to see the changes in effect. You can do this by pressing `Ctrl + C` in the terminal window to stop the old server, and you can start it again with node app.js.

3. Create a GET `/expressions/:id` get route that you will use to send back a single expression. You can use req.params object and the pre-written helper function getElementById(id, array) to find the correct expression before sending it back.

For instance, to find ID 560 from expressions, you would call `getElementById(560, expressions)`;. This function returns the element object if it exists and undefined if it does not.

Don’t forget to restart your server when you make changes to app.js. To test the Express Yourself machine, use the box in the upper-left corner to send a GET request for a specified ID.