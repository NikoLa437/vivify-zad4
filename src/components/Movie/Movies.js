import React, { useEffect, useState } from 'react';

import MovieList from './MovieList';
import MovieService from '../../services/MovieService';
import CreateMovieForm from '../CreateMovieForm/CreateMovieForm';

const Movies = () => {
    const [movies, setMovies] = useState([]);

    const addNewMovie = (movie) => {
        setMovies([...movies,movie])
    }

    const deleteMovie = (movieId) =>{
        let filteredMovies= movies.filter((movie)=> movie.id !== movieId)
        setMovies(filteredMovies)
    }

    const rateMovie = (movieId,stars) => {
        let movieForRate= movies.find((movie)=> movie.id === movieId)
        
        movieForRate.ratedBy.push({ 
            "userId": "999",
            "stars": stars,
        })
        movieForRate.isRated = true;

        movieForRate.rating = calculateAverageRating(movieForRate);

        setMovies(movies.map((movie) => (movie.id === movieId? movieForRate : movie)))
    }

    const calculateAverageRating = (movie) =>{
      let sumRate = 0
      
      for(let rate of movie.ratedBy) sumRate+=rate.stars

      return (sumRate/movie.ratedBy.length).toFixed(2);
    }

    useEffect(() => {
      setMovies(MovieService.getMovies());
    }, []);

    return (
        <div className="container-fluid" style={{ marginLeft: '-15px' }}>
            <div className="d-flex flex-row">
                <div className="col-sm-12">
                    <MovieList 
                        movies={movies}
                        deleteMovie={deleteMovie}
                        rateMovie={rateMovie} />
                </div>
            </div>
            <div className="d-flex flex-row">
                <div className="col-sm-12">
                    <CreateMovieForm addNewMovie={addNewMovie}/>
                </div>
            </div>
        </div>
    );
  }

export default Movies;
