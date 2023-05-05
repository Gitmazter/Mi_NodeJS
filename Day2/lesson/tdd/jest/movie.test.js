const Movie = require('./Movie')

describe('Movie', () => {
    // Arrange
    const id = 1;
    const title = 'The Batman'
    const releaseYear = '1969'
    const description = 'Itz guuud'
    const movie = new Movie(1, title, releaseYear, description);

    it('should have an id', () => {
        expect(movie.movieId).toEqual(id);
    })

    it('should have a title', () => {
        expect(movie.title).toEqual(title)
    });

    it('should have a release year', () => {
        expect(movie.releaseYear).toEqual(releaseYear)
    });

    it('should have a description', () => {
        expect(movie.description).toEqual(description)
    });

    // Act
    it('should return an instance of Movie', () => {
        // Assertion
        expect(movie instanceof Movie).toBe(true);
    });
})

describe('Movie2', () => {
    // Arrange
    const id = 1;
    const title = 'The Batman'
    const releaseYear = '1969'
    const description = 'Itz guuud'
    const movie = new Movie(1, title, releaseYear, description);

    it('should have an id', () => {
        expect(movie.movieId).toEqual(id);
    })
})