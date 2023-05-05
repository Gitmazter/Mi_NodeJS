import { getPopularMovies, getMovie } from './modules/movie-api.js';
import dotenv from 'dotenv';
dotenv.config()

getPopularMovies().then((data) => console.log(data));
getMovie('946311').then((data) => console.log(data))