const express = require('express');
const minionsRouter = express.Router();
const db = require('./db');


minionsRouter.get('/', (req, res, next) => {
    const minions = db.getAllFromDatabase('minions');
    res.status(200).send(minions) 
});

minionsRouter.get('/:minionId', (req, res, next) => {
    const id = req.params.minionId;
    const minion = db.getFromDatabaseById('minions', id);
    minion ? res.status(200).send(minion)
           : res.status(404).send('Minion does not exist')
});

minionsRouter.post('/', (req, res, next) => {
    const newMinion = req.body;
    const createdMinion = db.addToDatabase('minions', newMinion)
    res.status(201).send(createdMinion)
});

minionsRouter.put('/:minionId', (req, res, next) => {
    const id = req.params.minionId;
    const isFound = db.getFromDatabaseById('minions', id);
    if (!isFound) {
        res.status(404).send('Minion does not exist');
    } else {
        //if it does then the minion will be updated
        const { title, name, weaknesses, salary } = req.body;
        const updatedMinionObj = {
            id: id,
            name: name,
            title: title,
            weaknesses: weaknesses,
            salary: salary
        }
        const updatedMinion = db.updateInstanceInDatabase('minions', updatedMinionObj);
        console.log(updatedMinion);
        res.status(200).send(updatedMinion);
    }
});

minionsRouter.delete('/:minionId', (req, res, next) => {
    const id = req.params.minionId;
    const toDelete = db.deleteFromDatabasebyId('minions', id);
    !toDelete ? res.status(404).send('There is no minion to kill!')
        : res.status(204).send('Minion was eliminated and nobody noticed')
});

module.exports = minionsRouter;