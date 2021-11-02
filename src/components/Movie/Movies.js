import React, { useEffect, useState } from 'react';

import MovieList from './MovieList';
import MovieService from '../../services/MovieService';
import CreateMovieForm from '../CreateMovieForm/CreateMovieForm';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const addNewMovie = (movie) => {
    console.log(movie)
    setMovies([...movies,movie])
  }

  const deleteMovie = (movieId) =>{
    let filteredMovies= movies.filter((movie)=> movie.id !== movieId)
    setMovies(filteredMovies)
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
                  deleteMovie={deleteMovie} />
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
