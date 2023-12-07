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
//work API

// apiRouter.get('/minions/:minionId/work', (req, res, next) => {
//     const id = req.params.minionId;
//     const isFound = db.getFromDatabaseById('minions', id);
//     if (!isFound) {
//         res.status(404).send('The minion does not exist');
//     } else {
//         const allWork = db.getAllFromDatabase('work');
//         const minionDuties = allWork.filter(work => work.minionId === id);
//         res.status(200).send(minionDuties);
//     }
// });

// apiRouter.post('/minions/:minionId/work', (req, res, next) => {
//    const id = req.params.minionId;
//     const isFound = db.getFromDatabaseById('minions', id);
//     if (!isFound) {
//         res.status(404).send('The minion does not exist');
//     } else {
//         const {title, description, hours} = req.body;
//         const newDuty = {
//             title: title,
//             description: description,
//             hours: hours,
//             minionId: id
//         };
//         const newWork = db.addToDatabase('work', newDuty);
//         res.status(201).send(newWork);
//     }
// });

// apiRouter.put('/minions/:minionId/work/:workId', (req, res, next) => {
//     const minionId = req.params.minionId;
//     const workId = req. params.workId;
//     const isFound = db.getFromDatabaseById('minions', minionId);
//     const workFound = db.getFromDatabaseById('work', workId);
//     if (!isFound) {
//         res.status(404).send('The minion does not exist');
//     } else if (!workFound) {
//         res.status(404).send('The minion was found but, it does not have assigned that job');
//     } else {
//         const {title, description, hours} = req.body;
//         const updatedWork = {
//             id: workId,
//             title: title,
//             description: description,
//             hours: hours,
//             minionId: minionId 
//         };
//         const toDb = db.updateInstanceInDatabase('work', updatedWork);
//         res.status(201).send(toDb);
//     }
// });

// apiRouter.delete('/minions/:minionId/work/:workId', (req, res, next) => {
//     const minionId = req.params.minionId;
//     const workId = req. params.workId;
//     const isFound = db.getFromDatabaseById('minions', minionId);
//     const workFound = db.getFromDatabaseById('work', workId);
//     if (isFound && workFound) {
//         db.deleteFromDatabasebyId('work', workId);
//         res.status(204).send();
//     } else {
//         res.status(404).send('There is nothing to delete');
//     }
// });





module.exports = apiRouter;
