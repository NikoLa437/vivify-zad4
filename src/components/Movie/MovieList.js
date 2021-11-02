import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

const getMovies = (movies,deleteMovie) => (
  <div className="card-deck">
    {movies.map(movie => (
      <MovieCard key={movie.id} movie={movie} deleteMovie={deleteMovie} />
    ))}
  </div>
);

const MovieList = ({ movies, deleteMovie }) => <div>{getMovies(movies,deleteMovie)}</div>;

MovieList.defaultProps = {
  movies: [],
};

MovieList.propTypes = {
  movies: PropTypes.array,
};

export default MovieList;
