const next = document.querySelector('.nextJoke')
const jokeCard = document.querySelector('.jokesCard')

async function fetchJoke(){
    jokeCard.textContent = "Loading..."
    const JOKE_API_KEY = `https://v2.jokeapi.dev/joke/Any`
    try{
        const response = await fetch(JOKE_API_KEY)
        const data = await response.json();

        if (data.type === 'single') {
            jokeCard.textContent = data.joke;
        } else {
            jokeCard.textContent = `${data.setup} ${data.delivery}`;
        }
        console.log(response)
    } catch(erro){
        console.error(erro)
    }
}

next.addEventListener('click', fetchJoke)
