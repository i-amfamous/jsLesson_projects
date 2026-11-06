const seacrBar = document.querySelector('.mySearch')
const searchResultsModal = document.querySelector('.searchResultsModal')
const movieName = document.querySelector('.name')
const movieUrl = document.querySelectorAll('.movieUrl')

const API_KEY = '';


async function loadMovies(){
    const input = seacrBar.value.trim();
    if(!input){
        AudioListener("Please search for a movie")
    }
    fetch(API_KEY)
    await response.json();
}