//1. Complete the timeMiddleware function to DRY the current application by attaching the currentTime to the request body as date. Use this in all routes and eliminate the duplicate code.

const express = require('express');
const app = express();

const database = {
  snacks: ['chips', 'apple', 'cookies'],
  sides: ['beans and rice', 'cole slaw', 'broccoli'],
  appetizers: ['oysters', 'dumplings', 'smoked almonds'],
};

// Add your code here:
const timeMiddleware = (req, res, next) => {
  const currentTime = Date.now();
  req.date = currentTime;
  next();
};

//making app use this middleware globally
app.use(timeMiddleware);

app.get('/snacks', (req, res, next) => {
  //const currentTime = Date.now();
  const currentTime = req.date;
  res.send(`Snacks as of ${currentTime}: ${database.snacks}`);
});

app.get('/sides', (req, res, next) => {
  //const currentTime = Date.now();
  const currentTime = req.date;
  res.send(`Sides as of ${currentTime}: ${database.sides}`);
});

app.get('/appetizers', (req, res, next) => {
  //const currentTime = Date.now();
  const currentTime = req.date;
  res.send(`Appetizers as of ${currentTime}: ${database.appetizers}`);
});
