const express = require('express');
const apiRouter = express.Router();
const db = require('./db');

apiRouter.get('/minions', (req, res, next) => {
    const minions = db.getAllFromDatabase('minions');
    res.status(200).send(minions) 
});

apiRouter.get('/minions/:minionId', (req, res, next) => {
    const id = req.params.minionId;
    const minion = db.getFromDatabaseById('minions', id);
    console.log(minion);
    res.status(200).send(minion);
});

apiRouter.post('/minions', (req, res, next) => {
    const newMinion = req.body;
    console.log(newMinion);
    const createdMinion = db.addToDatabase('minions', newMinion)
    res.status(201).send(createdMinion)
});

apiRouter.put('/minions/:minionId', (req, res, next) => {
    const id = req.params.minionId;
    const {title, name, weaknesses, salary} = req.body;
    const updatedMinionObj = {
        id : id,
        name: name,
        title: title,
        weaknesses: weaknesses,
        salary: salary
    }
    const updatedMinion = db.updateInstanceInDatabase('minions', updatedMinionObj);
    console.log(updatedMinion);
    res.status(200).send(updatedMinion);
});

apiRouter.delete('/minions/:minionId', (req, res, next) => {
    const id = req.params.minionId;
    const toDelete = db.deleteFromDatabasebyId('minions', id);
    !toDelete ? res.status(400).send('There is no minion to kill!') : res.status(200).send('Minion was eliminated and nobody noticed')
})

module.exports = apiRouter;
