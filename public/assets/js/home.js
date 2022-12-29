 // Constant for storing the elements present in the main tag of the HTML file
const main = document.querySelector('main');

// Import the API
fetch(genres_list_http + new URLSearchParams({
    api_key: api_key
}))
.then(res => res.json())
.then(data => {
    data.genres.forEach(item => {
        fetchMoviesListByGenres(item.id, item.name)
    });
});

// Constant to search the api for a list of movies by genre
const fetchMoviesListByGenres = (id, genres) => {
    fetch(movie_genres_http + new URLSearchParams({
        api_key: api_key,
        with_genres: id,
        page: Math.floor(Math.random() * 3) + 1
    }))
    .then(res => res.json())
    .then(data => {
        makeCategoryElement(`${genres}_movies`, data.results);
    })
    .catch(err => console.log(err)); // Error handling
}

// Receive the category and the content it will bring
const makeCategoryElement = (category, data) => {
    main.innerHTML += `
    <div class="movie-list">
        <button class="pre-btn">
            <img src="./assets/images/prev.png" alt="Botão para voltar">
        </button>
        <h1 class="movie-category">${category.replace('_', ' ')}</h1>
        <div class="movie-container" id="${category}">
                
        </div>
        <button class="next-btn">
            <img src="./assets/images/next.png" alt="Botão para prosseguir">
        </button> 
    </div>
    
    `;
    makeCards(category, data); 
}

// Create the movie cards
const makeCards = (id, data) => {
    const movieContainer = document.getElementById(id);

    data.forEach((item, i) => {
        if(item.backdrop_path == null) {
            item.backdrop_path = item.poster_path;
            if (item.backdrop_path == null) {
                return
            }
        }

        movieContainer.innerHTML += `
        <div class="movie">
            <img src="${image_url}${item.backdrop_path}" alt="Poster">
            <p class="movie-title">${item.title}</p>
        </div>
        `;

        // Import the scrolling function of the carousels
        if(i == data.length - 1) {
            setTimeout( () => {
                setupScrolling()
            }, 100);
        }
    });
}
