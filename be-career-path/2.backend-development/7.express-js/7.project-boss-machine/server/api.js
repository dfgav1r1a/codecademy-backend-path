const express = require('express');
const apiRouter = express.Router();
const db = require('./db');

//Minions API
apiRouter.get('/minions', (req, res, next) => {
    const minions = db.getAllFromDatabase('minions');
    res.status(200).send(minions) 
});

apiRouter.get('/minions/:minionId', (req, res, next) => {
    const id = req.params.minionId;
    const minion = db.getFromDatabaseById('minions', id);
    console.log(minion);
    minion ? res.status(200).send(minion)
           : res.status(404).send('Minion does not exist')
});

apiRouter.post('/minions', (req, res, next) => {
    const newMinion = req.body;
    console.log(newMinion);
    const createdMinion = db.addToDatabase('minions', newMinion)
    res.status(201).send(createdMinion)
});

apiRouter.put('/minions/:minionId', (req, res, next) => {
    const id = req.params.minionId;
    //checking if minion exist
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

apiRouter.delete('/minions/:minionId', (req, res, next) => {
    const id = req.params.minionId;
    const toDelete = db.deleteFromDatabasebyId('minions', id);
    !toDelete ? res.status(404).send('There is no minion to kill!')
        : res.status(204).send('Minion was eliminated and nobody noticed')
})

//ideas API
apiRouter.get('/ideas', (req, res, next) => {
    const allIdeas = db.getAllFromDatabase('ideas');
    res.status(200).send(allIdeas);
});

apiRouter.get('/ideas/:ideaId', (req, res, next) => {
    const id = req.params.ideaId;
    const idea = db.getFromDatabaseById('ideas', id);
    idea ? res.status(200).send(idea)
        : res.status(404).send('Idea does not exist!');
});

apiRouter.post('/ideas', (req, res, next) => {
    const newIdea = db.addToDatabase('ideas', req.body);
    !newIdea ? res.status(400).send('Something went wrong, please try again')
             : res.status(201).send(newIdea);
});

apiRouter.put('/ideas/:ideaId', (req, res, next) => {
    const id = req.params.ideaId;
    const isFound = db.getFromDatabaseById('ideas', id);
    if (!isFound) {
        res.status(404).send('Idea does not exist');
    } else {
        const { name, description, weeklyRevenue, numWeeks } = req.body;
        const updatedIdeaObj = {
            id: id,
            name: name,
            description: description,
            weeklyRevenue: weeklyRevenue,
            numWeeks: numWeeks
        };
        const updatedIdea = db.updateInstanceInDatabase('ideas', updatedIdeaObj);
        res.status(200).send(updatedIdea)
    }
});

apiRouter.delete('/ideas/:ideaId', (req, res, next) => {
    const id = req.params.ideaId;
    const deletedIdea = db.deleteFromDatabasebyId('ideas', id);
    !deletedIdea ? res.status(404).send('Seems like this idea never existed')
        : res.status(204).send('Finally you got rid of this idea.')
});

//API for meetings

apiRouter.get('/meetings', (req, res, next) => {
    const allMettings = db.getAllFromDatabase('meetings');
    res.status(200).send(allMettings);
});

apiRouter.post('/meetings', (req, res, next) => {
    const meetingObj= db.createMeeting();
    const newMeeting= db.addToDatabase('meetings', meetingObj);
    res.status(201).send(newMeeting);
});

apiRouter.delete('/meetings', (req, res, next) => {
    db.deleteAllFromDatabase('meetings');
    res.status(204).send('All meetings were deleted');
});

module.exports = apiRouter;
