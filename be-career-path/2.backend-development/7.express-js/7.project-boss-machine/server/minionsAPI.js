const express = require('express');
const minionsRouter = express.Router();
const db = require('./db');

minionsRouter.param('minionId', (req, res, next, id) => {
    const minion = db.getFromDatabaseById('minions', id);
    if (!minion) {
        res.status(404).send("minion does not exist")
    } else {
        req.minion = minion;
        next();
    }
});

minionsRouter.get('/', (req, res, next) => {
    const minions = db.getAllFromDatabase('minions');
    res.status(200).send(minions) 
});

minionsRouter.get('/:minionId', (req, res, next) => {
    res.send(req.minion);
});

minionsRouter.post('/', (req, res, next) => {
    const newMinion = req.body;
    const createdMinion = db.addToDatabase('minions', newMinion)
    res.status(201).send(createdMinion)
});

minionsRouter.put('/:minionId', (req, res, next) => {
    const { title, name, weaknesses, salary } = req.body;
    const updatedMinionObj = {
        id: req.minion.id,
        name: name,
        title: title,
        weaknesses: weaknesses,
        salary: salary
    }
    const updatedMinion = db.updateInstanceInDatabase('minions', updatedMinionObj);
    res.status(200).send(updatedMinion);
});

minionsRouter.delete('/:minionId', (req, res, next) => {
    const toDelete = db.deleteFromDatabasebyId('minions', req.minion.id);
    !toDelete ? res.status(404).send('There is no minion to kill!')
              : res.status(204).send('Minion was eliminated and nobody noticed')
});


//work API

minionsRouter.get('/:minionId/work', (req, res, next) => {
    const allWork = db.getAllFromDatabase('work');
    const minionDuties = allWork.filter(work => work.minionId === req.minion.id);
    res.status(200).send(minionDuties);
});

minionsRouter.post('/:minionId/work', (req, res, next) => {
    const toAdd = req.body;
    toAdd.minionId = req.params.minionId;
    const newWork = db.addToDatabase('work', toAdd);
    res.status(201).send(newWork);
});

//adding middleware for the workId parameter

minionsRouter.param('workId', (req, res, next, id) => {
    const work = db.getFromDatabaseById('work', id);
    if (!work) {
        res.status(404).send('Work not found');
    } else {
        req.work = work;
        next();
    }
})

minionsRouter.put('/:minionId/work/:workId', (req, res, next) => {
    if (req.params.minionId !== req.body.minionId) {
        res.status(400).send();
    } else {
        const toDb = db.updateInstanceInDatabase('work', req.body);
        res.status(201).send(toDb);
    }
});

minionsRouter.delete('/:minionId/work/:workId', (req, res, next) => {
    const toDelete = db.deleteFromDatabasebyId('work', req.params.workId);
    if (toDelete) {
        res.status(204).send();
    } else {
        res.status(404).send('There is nothing to delete');
    }
});

module.exports = minionsRouter;