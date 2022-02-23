function quotes() {
  fetch("https://api.kanye.rest/")
    .then((res) => res.json())
    .then((data) => displayQuote(data));
}

const displayQuote = (quote) => {
  const newQuote = document.getElementById("quotes");
  newQuote.innerText = quote.quote;
};
