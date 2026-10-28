 const button = document.querySelector(".btn");
const message = document.querySelector(".quoteMessage");
const messageArthur = document.querySelector(".arthur");

function changeQuote() {
  fetch("./quotes.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to load quotes");
      }
      return response.json();
    })
    .then((quotes) => {
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

      message.textContent = `"${randomQuote.quote}"`;
      messageArthur.textContent = `— ${randomQuote.arthur}`;
    })
    .catch((error) => {
      console.error(error);
      message.textContent = "Unable to load a quote right now.";
      messageArthur.textContent = "Please try again.";
    });
}

button.addEventListener("click", changeQuote);
changeQuote();