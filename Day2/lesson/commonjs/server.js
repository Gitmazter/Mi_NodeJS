const {getPopularMovies, getMovie} = require("./modules/movie-api");

//getPopularMovies().then((data) => console.log(data));
getMovie('946311').then((data) => console.log(data))