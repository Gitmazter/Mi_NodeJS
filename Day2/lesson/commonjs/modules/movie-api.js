const HttpClient = require("./httpClient");
const Movie = require("./movies");

const getPopularMovies = async () => {
    const http = new HttpClient();
    const results = await http.listPopularMovies();
    const movies = results.map(
        (movie) => new Movie(movie.id, movie.title, movie.release_date, movie.overview)
    )
    return movies;
}

const getMovie = async(id) => {
    const http = new HttpClient()
    const movie = http.getMovie(`movie/${id}`)
    return movie
}

module.exports = {getPopularMovies, getMovie};