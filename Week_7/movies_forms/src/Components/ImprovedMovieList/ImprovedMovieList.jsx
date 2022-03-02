import React, { useState } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import AddMovie from '../AddMovie/AddMovie';
import Searchbar from '../Searchbar/Searchbar';

import moviesData from '../../movies.json';

function ImprovedMovieList() {
  const [movies, setMovies] = useState(moviesData);
  const [displayMovies, setDisplayMovies] = useState(moviesData);
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

  const addNewMovie = (newMovie) => {
    const updatedMovies = [...movies, newMovie];
    setMovies(updatedMovies);
    setDisplayMovies(updatedMovies);
  };

  const searchFilter = (searchQuery) => {
    let filteredMovies = movies.filter((movie) =>
      movie.title.toLowerCase().startsWith(searchQuery.toLowerCase())
    );
    console.log(filteredMovies);
    setDisplayMovies(filteredMovies);
  };

  return (
    <div>
      <h2>Movie List</h2>
      <AddMovie addMovie={addNewMovie} />
      <Searchbar search={searchFilter} />

      <button onClick={toggleShow}>{showMovies ? 'Hide' : 'Show'}</button>

      {showMovies &&
        displayMovies.map((movie) => {
          return <MovieCard key={movie._id} clickToDelete={deleteMovie} movie={movie} />;
        })}

      {/* <a href={loggedin? '/auth/logout' : '/auth/login'}> {loggedin ? 'Logout' : 'Login'} </a> */}
    </div>
  );
}

export default ImprovedMovieList;
