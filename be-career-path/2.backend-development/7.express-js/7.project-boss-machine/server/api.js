const express = require('express');
const apiRouter = express.Router();
const minionsRouter = require('./minionsAPI');
const ideasRouter = require('./ideasAPI');
const meetingsRouter = require('./meetingsAPI');

//Minions API
apiRouter.use('/minions', minionsRouter);

//ideas API
apiRouter.use('/ideas', ideasRouter);

//API for meetings
apiRouter.use('/meetings', meetingsRouter);


module.exports = apiRouter;
