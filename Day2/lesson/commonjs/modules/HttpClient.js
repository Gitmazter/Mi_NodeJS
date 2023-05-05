class HttpClient {
    listPopularMovies = async() => {
        const api_key='3d76768d00521b8d87b1b0383260abfa';
        const baseUrl='https://api.themoviedb.org/3/';

        const response = await fetch(
            `${baseUrl}movie/popular?api_key=${api_key}&language=sv-SE`
        );

        const {results} = await response.json()

        return results
    }

    getMovie = async(endpoint) => {
        const api_key='3d76768d00521b8d87b1b0383260abfa';
        const baseUrl='https://api.themoviedb.org/3/';

        const response = await fetch(
            `${baseUrl}${endpoint}?api_key=${api_key}&language=sv-SE`
        );
        const movie = await response.json()

        return movie
    }
}

module.exports = HttpClient