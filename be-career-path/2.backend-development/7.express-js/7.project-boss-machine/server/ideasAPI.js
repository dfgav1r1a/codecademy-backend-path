const express = require('express');
const checkMillionDollarIdea = require('./checkMillionDollarIdea');
const ideasRouter = express.Router();
const db = require('./db');

ideasRouter.param('ideaId', (req, res, next, id) => {
    const idea = db.getFromDatabaseById('ideas', id);
    if (!idea) {
        res.status(404).send('Idea does not exist!');
    } else {
        req.idea = idea;
        next();
    }
});

ideasRouter.get('/', (req, res, next) => {
    const allIdeas = db.getAllFromDatabase('ideas');
    res.status(200).send(allIdeas);
});

ideasRouter.get('/:ideaId', (req, res, next) => {
    res.status(200).send(req.idea);
});

ideasRouter.post('/', checkMillionDollarIdea, (req, res, next) => {
    const newIdea = db.addToDatabase('ideas', req.body);
    !newIdea ? res.status(400).send('Something went wrong, please try again')
             : res.status(201).send(newIdea);
});

ideasRouter.put('/:ideaId', checkMillionDollarIdea, (req, res, next) => {
        const { name, description, weeklyRevenue, numWeeks } = req.body;
        const updatedIdeaObj = {
            id: req.idea.id,
            name: name,
            description: description,
            weeklyRevenue: weeklyRevenue,
            numWeeks: numWeeks
        };
        const updatedIdea = db.updateInstanceInDatabase('ideas', updatedIdeaObj);
        res.status(200).send(updatedIdea)
});

ideasRouter.delete('/:ideaId', (req, res, next) => {
    const deletedIdea = db.deleteFromDatabasebyId('ideas', req.idea.id);
    !deletedIdea ? res.status(404).send('Seems like this idea never existed')
                 : res.status(204).send('Finally you got rid of this idea.')
});

module.exports = ideasRouter;