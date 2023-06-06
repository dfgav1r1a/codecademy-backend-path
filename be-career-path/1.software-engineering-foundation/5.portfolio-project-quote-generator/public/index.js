import quotes from './src/data.js';

const button = document.querySelector('button');
const quoteContainer= document.querySelector('.quote');
quoteContainer.style.display = 'none';
const picContainer = document.querySelector('.picContainer');

button.addEventListener('click' , () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    console.log(randomQuote);
    renderQuote(randomQuote)
quoteContainer.style.display = 'block';
})

const renderQuote = ({author, quote}) => {
switch (author) {
    case 'Bob Marley':
        picContainer.style.backgroundImage = 'url(./src/images/bill-fairs-bob-marley.jpg)'
        break;
    case 'Jimi Hendrix':
        picContainer.style.backgroundImage = 'url(./src/images/jimi-hendrix.jpg)'
        break;
    case 'John Lennon':
        picContainer.style.backgroundImage = 'url(./src/images/fleur-john-lennon.jpg)'
        break;
    case 'Paul McCartney':
        picContainer.style.backgroundImage = 'url(./src/images/paul-mcartney.png)'
        break;
    case 'Alanis Morissette':
        picContainer.style.backgroundImage = 'url(./src/images/Morissette.jpg)'
        break;
    case 'Sylvia Plath':
        picContainer.style.backgroundImage = 'url(./src/images/plath.jpg)'
        break;
    case 'George Carlin':
        picContainer.style.backgroundImage = 'url(./src/images/carlin.jpg)'
        break;
    case 'Jim Morrison':
        picContainer.style.backgroundImage = 'url(./src/images/jim-morrison.jpg)'
        break;
    case 'Gustavo Cerati':
        picContainer.style.backgroundImage = 'url(./src/images/cerati.jpg)'
        break;
    case 'Janis Joplin':
        picContainer.style.backgroundImage = 'url(./src/images/joplin.jpg)'
        break;
    case 'Bon Jovi':
        picContainer.style.backgroundImage = 'url(./src/images/bon-jovi.jpg)'
        break;
    case 'Jonny Lang':
        picContainer.style.backgroundImage = 'url(./src/images/jonny-lang.jpg)'
        break;
    case 'Billy Joel':
        picContainer.style.backgroundImage = 'url(./src/images/joel.jpg)'
        break;
    case 'Bob Dylan':
        picContainer.style.backgroundImage = 'url(./src/images/dylan.jpg)'
        break;
    case 'Gerard Way':
        picContainer.style.backgroundImage = 'url(./src/images/gerard-way.jpg)'
        break;
    case 'Morrissey':
        picContainer.style.backgroundImage = 'url(./src/images/morrissey.png)'
        break;
};

const quoteTitle = document.querySelector('.quote h3');
const quoteAuthor = document.querySelector('.quote p')
quoteTitle.textContent = quote;
quoteAuthor.textContent = author;
}