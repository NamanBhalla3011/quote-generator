const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');
// let apiQuotes = [];

// Show loading
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}
//hide Loading
function complete() {
    quoteContainer.hidden = false;
    loader.hidden = true;
}
// Show new Quote
function newQuote() {
    loading();

    // Pick a random quote from apiQuote
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    console.log(quote);
    //Check if quote is null replace it with Unknown
    if (!quote.author) {
        authorText.textContent = "Unknown";
    } else {
        authorText.textContent = quote.author;
    }
    // Check Quote length to determine styling
    if (quote.text.length > 120) {
        quoteText.classList.add('long-quote')
    } else {
        quoteText.classList.remove('long-quote')
    }
    quoteText.textContent = quote.text;

    setTimeout(() => {
        complete();
    }, 300);

}






// Get Quotes from API
// async function getQuotes() {
//     const apiUrl = 'https://type.fit/api/quotes';
//     try {
//         const response = await fetch(apiUrl);
//         apiQuotes = await response.json();
//         newQuote();
//     } catch (error) {
//         // Handle error
//     }
// }

// On load
// getQuotes();

//Tweet Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent}  - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

function facebookQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent}  - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}
//Event Listner
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

newQuote();