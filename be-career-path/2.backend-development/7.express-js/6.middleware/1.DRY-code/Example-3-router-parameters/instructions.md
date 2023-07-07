# I

1. Let’s refactor this code to use app.param for all /spices/:spiceId routes.

First, start your code with a call to app.param. Write functionality that will look for the spiceIndex and attach it to the req object as req.spiceIndex if it exists. Call next after that. If it does not exist, send a 404 error response and do not call next.

2. Now, refactor your current code to get rid of any index-checking logic in /spices/:spiceId routes. Use req.spiceIndex to do any necessary operations on the spiceRack object. You should also get rid of anything that would send an error response, as non-existent ids will already have been handled by router.param.

# II merge parameters

1. Let’s make our spices API more flexible and allow spices to be associated with different spice racks. The goal for this exercise will be to ensure that when new spices are created or updated, they will be associated with the correct spice rack.

In the workspace, you have a new root app.js file and a spicesRouter.js with code from the last exercise. app.js will handle interactions retrieving, creating, updating, and deleting spice racks, and spicesRouter.js will be nested to handle individual spices with the spice racks. Each file has a param method call (app.param in app.js, router.param in spicesRouter.js).

To begin, let’s hook the router up to the main application. At the end of app.js, use the spicesRouter for all /spice-racks/:spiceRackId/spices routes.

2. Now, let’s make sure that the spicesRouter is merging parameters from parent app.js Express instance. Add the proper options to the .Router() method at the top of your spicesRouter.js file.

3. Okay, now let’s make sure that newly created spices inside spicesRouter.js are associated with the correct spice rack. Inside your .post() route, make sure to set the newSpice.spiceRackId equal to the req.params.spiceRackId that the parent router attached if mergeParams has performed as expected. Don’t forget to convert the spiceRackId to a number before attaching it. Make sure to set this before it is pushed onto the spices array.