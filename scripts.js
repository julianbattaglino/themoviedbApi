//fetch data from movies using fetch ajax

fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=6151eecd32d77cd15b6a812ca65a4997') //fetch data from movies using fetch ajax
    .then(res => res.json()) //convert data to json
    .then(data => { //display data in console
        console.log(data.results);

        movies = data


        //Loop foreach para recorrer el array de peliculas
        movies.results.forEach(el => {

            const movieList = document.getElementById('movie-list');
            const movieItem = document.createElement('div');
            movieList.classList.add('row');
            movieItem.classList.add('col-12', 'col-md-6', 'col-xl-3');
            movieItem.innerHTML = `
                <img src="https://image.tmdb.org/t/p/w500/${el.poster_path}" class="img-fluid">
                <h2 class="movie-title">${el.title}</h2>
                <h3 class="movie-rating"><i class="fa-solid fa-star fa-xs"></i>Rating: ${el.vote_average}</h3>
                <button id="detail-btn" class="btn">Ver detalle</button>
        `;
            movieList.appendChild(movieItem);

            //Evento para ver la pelicula en detalle cuando se haga click en el boton 
            movieItem.addEventListener('click', () => {
                console.log(el);
                //on hover show movie information inside image with css class
                movieItem.innerHTML = `
                <article class="movie-detail">
                <h2 class="movie-title">${el.title}</h2>
                <p class="movie-description">${el.overview}</p>
                <h3 class="movie-rating"><i class="fa-solid fa-star fa-xs"></i>Rating: ${el.vote_average}</h3>
                <h3 class="movie-rating">Release: ${el.release_date}</h3>
                </article>


        `;
            });

            movieItem.addEventListener('mouseleave', () => {
                console.log(el);
                //on hover show movie information inside image with css class
                movieItem.innerHTML = `
                <img src="https://image.tmdb.org/t/p/w500/${el.poster_path}" class="img-fluid">
                <h2 class="movie-title">${el.title}</h2>
                <h3 class="movie-rating"><i class="fa-solid fa-star fa-xs"></i>Rating: ${el.vote_average}</h3>
                <button id="detail-btn" class="btn">Ver detalle</button>
        `;
            });




        }
        );
    }
    );