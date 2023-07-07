1. There’s something missing from the custom body-parsing middleware function, fix it to move on.

2. Now our app should work, but let’s replace the custom body-parsing with the body-parser package. Use bodyParser.json() for all routes.

3. The following existence checking logic appears at all /cards/:cardId routes. Refactor it to a middleware function that matches all /cards/:cardId routes. If the card exists, add it to the req object as req.cardIndex and refactor routes to use req.cardIndex where necessary.

```js
const cardId = Number(req.params.cardId);
const cardIndex = cards.findIndex(card => card.id === cardId);
if (cardIndex === -1) {
  return res.status(404).send('Card not found');
}
```

4. You probably noticed that these lines get replicated for POST and PUT requests

```js
const newCard = req.body;
const validSuits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
const validRanks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
if (validSuits.indexOf(newCard.suit) === -1 || validRanks.indexOf(newCard.rank) === -1) {
  return res.status(400).send('Invalid card!');
}
```

Create a custom middleware function named validateCard that replicated this logic. Use it in the middleware stack for the POST and PUT routes.

5. Congratulations! You’ve fixed the broken functionality and greatly increased the code quality using your middleware skills!