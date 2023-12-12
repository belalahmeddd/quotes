
var quotes = [
    {
        quote: "\"You miss 100% of the shots you don't take.\"",
        author: "--Wayne Gretzy"
    },
    {
        quote: "\"Do not take life too seriously. You will not get out alive.\"",
        author: "--Elbert Hubbard"
    },
    {
        quote: "\"Resentment is like drinking poison and waiting for your enemies to die.\"",
        author: "--Nelson Mandela"
    },
    {
        quote: "\"The best revenge is massive success.\"",
        author: "--Frank Sinatra"
    },
    {
        quote: "\"It's not what happens to you, but how you react to it that matters.\"",
        author: "--Epictetus"
    },
]


function getQuote() {
    var randomNumber = Math.floor(Math.random() * quotes.length);
    var randomQuote = quotes[randomNumber];
    var selectedQuote = randomQuote.quote;
    var selectedAuthor = randomQuote.author;
    document.getElementById("quote").innerHTML = selectedQuote;
    document.getElementById("author").innerHTML = selectedAuthor;
}



