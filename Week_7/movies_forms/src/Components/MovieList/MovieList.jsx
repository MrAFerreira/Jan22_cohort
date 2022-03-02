import React, { useState } from 'react';
import MovieCard from '../MovieCard/MovieCard';

import moviesData from '../../movies.json';

function MovieList() {
  //Declaring state
  const [movies, setMovies] = useState(moviesData);

  //Function to delete a movie
  const deleteMovie = (movieID) => {
    const filteredMovies = movies.filter((movie) => {
      return movie._id !== movieID;
    });
    setMovies(filteredMovies);
  };

  return (
    <div>
      <h2>Movie List</h2>
      {movies.map((movie) => {
        return <MovieCard key={movie._id} clickToDelete={deleteMovie} movie={movie} />;
      })}
    </div>
  );
}

export default MovieList;
