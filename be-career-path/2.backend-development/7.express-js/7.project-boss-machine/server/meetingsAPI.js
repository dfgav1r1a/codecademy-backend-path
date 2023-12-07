const express = require('express');
const meetingsRouter = express.Router();
const db = require('./db');

meetingsRouter.get('/', (req, res, next) => {
    const allMettings = db.getAllFromDatabase('meetings');
    res.status(200).send(allMettings);
});

meetingsRouter.post('/', (req, res, next) => {
    const meetingObj = db.createMeeting();
    const newMeeting = db.addToDatabase('meetings', meetingObj);
    res.status(201).send(newMeeting);
});

meetingsRouter.delete('/', (req, res, next) => {
    db.deleteAllFromDatabase('meetings');
    res.status(204).send('All meetings were deleted');
});

module.exports = meetingsRouter;