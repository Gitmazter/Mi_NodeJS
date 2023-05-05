// class Movie {
//     constructor(movieid, title, releaseYear, description) {
//         this.movieid = movieid;
//         this.title = title;
//         this.releaseYear = releaseYear;
//         this.description = description;
//     }
// }

const Movie = require("./modules/movies");

const getPopularMovies = async () => {
    const api_key='3d76768d00521b8d87b1b0383260abfa';
    const baseUrl='https://api.themoviedb.org/3/';

    const response = await fetch(
        `${baseUrl}movie/popular?api_key=${api_key}&language=sv-SE`
    );
    const {results} = await response.json()
    
    const movies = results.map(
        (movie) => new Movie(movie.id, movie.title, movie.release_date, movie.overview)
    )
    console.log(movies);
}

const getMovie = async(id) => {
    console.log("getting a movie");

    const api_key='3d76768d00521b8d87b1b0383260abfa';
    const baseUrl='https://api.themoviedb.org/3/';

    const response = await fetch(
        `${baseUrl}movie/${id}?api_key=${api_key}&language=sv-SE`
    );
    const { results } = await response.json()

    console.log(results);
}

getPopularMovies();

