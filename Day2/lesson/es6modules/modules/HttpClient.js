export class HttpClient {
    api_key = process.env.API_KEY
    baseUrl = process.env.BASE_URL

    listPopularMovies = async() => {
        const response = await fetch(
            `${this.baseUrl}movie/popular?api_key=${this.api_key}&language=sv-SE`
        );
        const { results } = await response.json()
        return results
    }

    getMovie = async(endpoint) => {
        const response = await fetch(
            `${this.baseUrl}${endpoint}?api_key=${this.api_key}&language=sv-SE`
        );
        const movie = await response.json()
        return movie
    }
}
