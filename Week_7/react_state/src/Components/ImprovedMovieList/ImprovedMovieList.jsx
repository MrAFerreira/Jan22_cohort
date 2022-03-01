import React, { useState } from 'react';
import MovieCard from '../MovieCard/MovieCard';

import moviesData from '../../movies.json';

function ImprovedMovieList() {
  const [movies, setMovies] = useState(moviesData);
  const [showMovies, setShowMovies] = useState(true);

  const deleteMovie = (movieID) => {
    const filteredMovies = movies.filter((movie) => {
      return movie._id !== movieID;
    });
    setMovies(filteredMovies);
  };

  const toggleShow = () => {
    setShowMovies(!showMovies);
    console.log(showMovies);
  };
  return (
    <div>
      <h2>Movie List</h2>
      <button onClick={toggleShow}>{showMovies ? 'Hide' : 'Show'}</button>

      {showMovies &&
        movies.map((movie) => {
          return <MovieCard key={movie._id} clickToDelete={deleteMovie} movie={movie} />;
        })}

      {/* <a href={loggedin? '/auth/logout' : '/auth/login'}> {loggedin ? 'Logout' : 'Login'} </a> */}
    </div>
  );
}

export default ImprovedMovieList;
