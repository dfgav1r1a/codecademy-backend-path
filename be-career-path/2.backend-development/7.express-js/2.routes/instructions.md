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

4. Use req.query to update the proper element in the expressions array.

We’ve imported a helper function from /utils.js to help with this task.

You can use the updateElement() helper function in your PUT /expressions/:id route.

It takes three arguments:

- id (the ID number of the element)
- queryArguments (the new, updated expression object from req.query)
- elementList (the array which contains the element to update)
- updateElement() updates that specific element in the elementList array (you’ll pass in the expressions array), and then returns the updated element.

Be sure to check that an expression with the id you provide exists in the expressions array (getIndexById() can help)!

To test your functionality with the Express Yourself machine, make sure your server is running, get all expressions, and then use the UPDATE tab to select an individual expression, select updates, and send the PUT request.

5. Create a POST /expressions route. It should send create and add a new expression to the expressions array if it is a valid new expression (meaning it has an emoji and name key). It should send back the new element with a 201 status code if it is valid, and it should send a 400 status code if the object is not valid.

You can use the createElement(elementType, objectToCreate) helper function to create a valid expression. The first argument is the type of element, so it should be 'expressions' in this case. The second argument should be the query object with an emoji and a name property. This function will return false if the objectToCreate does not contain all necessary key-value pairs, and it will return the newly-created element if object to create is valid. It does not add the created element to any arrays, you will need to do so yourself.

Don’t forget to restart your server and test as you implement the functionality. To test your route, use the POST tab in the upper left corner. Select a name and emoji and send the request to see if your route works as intended.

6. Create a DELETE /expressions/:id route. It should send back a 404 response for a request with an invalid id, and it should delete the proper element from the expressions array and send a 204 status with a valid id.

To test your functionality, use the DELETE tab in the upper left. Select the ID to delete and send the request.

## Adding Animal Routes

1. In your app.js file, Create a GET /animals route to return an array of all animals.

2. Create a GET /animals/:id route to respond with a single animal.

3. Create a PUT /animals/:id route to update an animal in animals and send back the updated animal.

4. Create a POST /animals route to add new animals to the animals and respond with the new animal.

5. Create a DELETE /animals/:id route to delete animals by ID.