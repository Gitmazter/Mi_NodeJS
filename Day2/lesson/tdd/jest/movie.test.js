const Movie = require('./Movie')

// Arrange
const movie = new Movie();

// Act
it('should return an instance of Movie', () => {
    // Assertion
    expect(movie instanceof Movie).toBe(true);
});