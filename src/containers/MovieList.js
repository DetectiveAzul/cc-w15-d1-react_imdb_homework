import React from 'react';
import Movie from '../components/Movie.js';

const MovieList = (props) => {
  const movies = props.movieData.map((movie) => {
    return (
      <Movie key={movie.id}>{movie.name}</Movie>
    );
  });


return (
  <div className="movie-list">
    { movies }
    <p>See more opening this week</p>
  </div>
);

};

export default MovieList;
