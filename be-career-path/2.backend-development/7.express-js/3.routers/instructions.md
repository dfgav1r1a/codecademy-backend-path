# Express Router

1. Create an expressionsRouter instance of Express.Router. Mount it at /expressions at your base app level with app.use.

After doing so, create a route for your expressionsRouter that will send all expressions for a GET request.

## Separating concerns

2. Let’s start to refactor our /expressions routes to expressions.js.

Open the expressions.js file. Create an expressionsRouter instance of Express.Router.

Export expressionsRouter from that file with module.exports. Remove your old expressionsRouter from app.js. require your expressionsRouter from expressions.js into app.js and make sure it is mounted at /expressions.

Move your GET /expressions handler from app.js to expressions.js. You’ll have to also move the expressions array to that file. Finally, make sure that you move the seedElements(expressions) line into expressions.js.

3. Move all your /expressions routes to your router into expressions.js. Make sure that they still match the same request paths, and remove the duplicate code from app.js.

Move the following routes to expressions.js:

- GET /expressions/:id
- PUT /expressions/:id
- POST /expressions
- DELETE /expressions/:id

Remember to change the paths for each route handler as you move them, as they should already be mounted at /expressions inside expressions.js.

Make sure that you still require the same helper functions from utils.js in expressions.js.

4. Now, do the same refactoring for /animals routes into an animalsRouter Router that you create in animals.js.