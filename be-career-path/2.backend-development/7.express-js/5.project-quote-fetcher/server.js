const express = require('express');
const morgan = require('morgan');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('./public'));

app.get('/api/quotes/random', (req, res, next) => {
  const quote = getRandomElement(quotes);
  const quoteObj = {quote}
  res.send(quoteObj);
});

app.get('/api/quotes', (req, res, next) => {
  const query = req.query;
  if (query.hasOwnProperty('person')) {
    const quotesArr = quotes.filter(quote => quote.person === query.person);
    const obj = {quotes: quotesArr}
    res.send(obj);
  } else {
    res.send({quotes})
  } 
});

app.post('/api/quotes', (req, res, next) => {
    const query = req.query;
    if (query.hasOwnProperty('quote') && query.hasOwnProperty('person')) {
        quotes.push(query);
        res.send({quote: query})
    } else {
        res.status(400).send();
    }
});

app.listen(PORT, () => {
    console.log(`Server listening in port ${PORT}`);
})
