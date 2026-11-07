const TMDB_API_KEY = 'YOUR_TMDB_API_KEY_HERE';
const DEFAULT_SEARCH = '';
const FALLBACK_POSTER = 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=900&q=80';
const FALLBACK_VIDEO = 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4';

const FEATURED_MOVIES = [
    { Title: 'The Batman', Year: '2022', Type: 'movie', Poster: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=900&q=80' },
    { Title: 'Dune: Part Two', Year: '2024', Type: 'movie', Poster: 'https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?auto=format&fit=crop&w=900&q=80' },
    { Title: 'Oppenheimer', Year: '2023', Type: 'movie', Poster: 'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=900&q=80' },
    { Title: 'Mad Max: Fury Road', Year: '2015', Type: 'movie', Poster: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80' },
    { Title: 'Interstellar', Year: '2014', Type: 'movie', Poster: 'https://images.unsplash.com/photo-1460881680858-30d872d5b530?auto=format&fit=crop&w=900&q=80' },
    { Title: 'The Dark Knight', Year: '2008', Type: 'movie', Poster: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=900&q=80' },
    { Title: 'Inception', Year: '2010', Type: 'movie', Poster: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80' },
    { Title: 'Mission: Impossible', Year: '2023', Type: 'movie', Poster: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=80' }
];

const searchInput = document.querySelector('.mySearch');
const searchResultsModal = document.getElementById('searchResultsModal');
const searchResultsList = document.getElementById('searchResultsList');
const moviesDisplay = document.getElementById('moviesDisplay');
const closeResultsButton = document.getElementById('closeResults');
const seeAllMoviesButton = document.getElementById('seeAllMovies');
const movieModal = document.getElementById('movieModal');
const movieModalVideo = document.getElementById('movieModalVideo');
const movieModalTitle = document.getElementById('movieModalTitle');
const movieModalType = document.getElementById('movieModalType');
const movieModalYear = document.getElementById('movieModalYear');
const movieModalText = document.getElementById('movieModalText');
const closeMovieModalButton = document.getElementById('closeMovieModal');
const muteToggleButton = document.getElementById('muteToggle');
const modalPlayButton = document.querySelector('.modal-play');
const heroPlayButton = document.querySelector('.hero-play');
const heroElement = document.querySelector('.hero');
let searchTimer;

function getPosterUrl(path) {
    if (!path) {
        return FALLBACK_POSTER;
    }
    return `https://image.tmdb.org/t/p/w500${path}`;
}

function normalizeTmdbMovie(movie) {
    return {
        Title: movie.title || movie.name || 'Untitled movie',
        Year: (movie.release_date || movie.first_air_date || 'N/A').slice(0, 4),
        Type: 'movie',
        Poster: getPosterUrl(movie.poster_path)
    };
}

function setHeroBackground(poster) {
    const safePoster = poster || FALLBACK_POSTER;
    heroElement.style.setProperty('--hero-bg', `url("${safePoster}")`);
}

function renderSearchResults(list = []) {
    if (!searchInput.value.trim()) {
        searchResultsModal.classList.remove('show');
        searchResultsList.innerHTML = '';
        return;
    }

    if (!list.length) {
        searchResultsList.innerHTML = '<li class="result-empty">No matching movies found.</li>';
        searchResultsModal.classList.add('show');
        return;
    }

    searchResultsList.innerHTML = list
        .slice(0, 6)
        .map(
            (movie) => `
                <li class="result-item" data-query="${movie.Title}">
                    <span>${movie.Title}</span>
                    <span>${movie.Year}</span>
                </li>
            `
        )
        .join('');

    searchResultsModal.classList.add('show');
}

function renderMovies(list = []) {
    if (!list.length) {
        moviesDisplay.innerHTML = '<div class="empty-state">No movies match your search right now.</div>';
        return;
    }

    moviesDisplay.innerHTML = list
        .map((movie) => {
            const poster = movie.Poster && movie.Poster !== 'N/A' ? movie.Poster : FALLBACK_POSTER;
            const title = movie.Title || 'Untitled movie';
            const year = movie.Year || 'N/A';
            const type = movie.Type ? movie.Type.toUpperCase() : 'MOVIE';

            return `
                <article class="movie" data-title="${title}" data-year="${year}" data-type="${type}" data-poster="${poster}">
                    <div class="movie-media">
                        <img class="moviePoster" src="${poster}" alt="${title} poster" />
                    </div>
                    <div class="movie-info">
                        <p class="movie-tag">${type} • ${year}</p>
                        <h2 class="name">${title}</h2>
                        <button type="button" class="play" data-title="${title}" data-year="${year}" data-type="${type}">Watch now</button>
                    </div>
                </article>
            `;
        })
        .join('');

    const firstPoster = list[0].Poster && list[0].Poster !== 'N/A' ? list[0].Poster : FALLBACK_POSTER;
    setHeroBackground(firstPoster);
}

function updateMuteButton() {
    muteToggleButton.textContent = movieModalVideo.muted ? '🔊' : '🔇';
}

function toggleVideoPlayback() {
    const isPlaying = movieModal.classList.toggle('is-playing');
    modalPlayButton.textContent = isPlaying ? '❚❚ Pause' : '▶ Play';

    if (movieModalVideo.src) {
        if (isPlaying) {
            movieModalVideo.play().catch(() => {
                movieModalVideo.muted = true;
                updateMuteButton();
            });
        } else {
            movieModalVideo.pause();
        }
    }
}

function openMovieModal(movie) {
    movieModalTitle.textContent = movie.title || 'Movie title';
    movieModalYear.textContent = movie.year || 'N/A';
    movieModalType.textContent = movie.type || 'MOVIE';
    movieModalText.textContent = `A premium streaming pick with a cinematic vibe and a strong story arc.`;
    const poster = movie.poster || FALLBACK_POSTER;
    movieModalVideo.src = FALLBACK_VIDEO;
    movieModalVideo.poster = poster;
    movieModalVideo.muted = false;
    movieModal.querySelector('.movie-modal-media').style.setProperty('--movie-poster', `url("${poster}")`);
    movieModal.classList.add('show');
    movieModal.classList.remove('is-playing');
    modalPlayButton.textContent = '▶ Play';
    updateMuteButton();
    movieModal.setAttribute('aria-hidden', 'false');
}

function closeMovieModal() {
    movieModal.classList.remove('show');
    movieModal.classList.remove('is-playing');
    movieModal.setAttribute('aria-hidden', 'true');
    movieModalVideo.pause();
    movieModalVideo.currentTime = 0;
    movieModalVideo.muted = false;
    modalPlayButton.textContent = '▶ Play';
    updateMuteButton();
}

function playMovie(movieTitle, movieYear, movieType, poster) {
    openMovieModal({
        title: movieTitle,
        year: movieYear,
        type: movieType,
        poster
    });
}

async function fetchMovies(query = '') {
    const searchTerm = query.trim();

    if (!searchTerm) {
        renderMovies(FEATURED_MOVIES);
        searchResultsModal.classList.remove('show');
        searchResultsList.innerHTML = '';
        searchInput.value = '';
        setHeroBackground(FEATURED_MOVIES[0].Poster);
        return;
    }

    moviesDisplay.innerHTML = '<div class="empty-state">Loading movies...</div>';

    try {
        if (TMDB_API_KEY === 'YOUR_TMDB_API_KEY_HERE') {
            throw new Error('Add your free TMDB API key in script.js to load live movies.');
        }

        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(searchTerm)}&include_adult=false&page=1`);

        if (!response.ok) {
            throw new Error('Could not load movies.');
        }

        const data = await response.json();

        if (!Array.isArray(data.results)) {
            throw new Error('No movies found.');
        }

        const results = data.results.slice(0, 8).map(normalizeTmdbMovie);
        renderMovies(results);
        renderSearchResults(results);
    } catch (error) {
        moviesDisplay.innerHTML = `<div class="empty-state">${error.message || 'Something went wrong while fetching movies.'}</div>`;
        searchResultsList.innerHTML = '<li class="result-empty">Unable to load results right now.</li>';
        searchResultsModal.classList.add('show');
    }
}

searchInput.addEventListener('input', (event) => {
    const query = event.target.value.trim();

    clearTimeout(searchTimer);

    if (!query) {
        fetchMovies();
        return;
    }

    searchTimer = setTimeout(() => {
        fetchMovies(query);
    }, 350);
});

searchResultsList.addEventListener('click', (event) => {
    const item = event.target.closest('.result-item');

    if (!item) {
        return;
    }

    const query = item.dataset.query;
    searchInput.value = query;
    fetchMovies(query);
    searchResultsModal.classList.remove('show');
});

moviesDisplay.addEventListener('click', (event) => {
    const button = event.target.closest('.play');

    if (!button) {
        return;
    }

    const movieTitle = button.dataset.title;
    const movieYear = button.dataset.year || 'N/A';
    const movieType = button.dataset.type || 'MOVIE';
    const moviePoster = button.closest('.movie')?.dataset.poster || FALLBACK_POSTER;
    playMovie(movieTitle, movieYear, movieType, moviePoster);
});

heroPlayButton.addEventListener('click', () => {
    const firstMovie = FEATURED_MOVIES[0];
    playMovie(firstMovie.Title, firstMovie.Year, firstMovie.Type.toUpperCase(), firstMovie.Poster);
});

closeResultsButton.addEventListener('click', () => {
    searchResultsModal.classList.remove('show');
});

seeAllMoviesButton.addEventListener('click', () => {
    searchInput.value = '';
    fetchMovies();
    searchResultsModal.classList.remove('show');
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

closeMovieModalButton.addEventListener('click', closeMovieModal);

muteToggleButton.addEventListener('click', () => {
    movieModalVideo.muted = !movieModalVideo.muted;
    updateMuteButton();
});

modalPlayButton.addEventListener('click', toggleVideoPlayback);

movieModalVideo.addEventListener('play', () => {
    movieModal.classList.add('is-playing');
    modalPlayButton.textContent = '❚❚ Pause';
});

movieModalVideo.addEventListener('pause', () => {
    movieModal.classList.remove('is-playing');
    modalPlayButton.textContent = '▶ Play';
});

movieModal.addEventListener('click', (event) => {
    if (event.target.dataset.closeModal === 'true') {
        closeMovieModal();
    }
});

document.addEventListener('click', (event) => {
    const insideModal = event.target.closest('.searchResultsModal');
    const insideSearch = event.target.closest('.mySearch');

    if (!insideModal && !insideSearch) {
        searchResultsModal.classList.remove('show');
    }
});

fetchMovies();
