import React from 'react';
import './MovieCard.css';

function MovieCard(props) {
  const { movie, clickToDelete } = props;
  // <p> Has oscars</p>
  // <p> No oscars for you</p>
  function generateScore(score) {
    score >= 9 ? (
      <span className="green"> {score}</span>
    ) : score < 9 && score >= 5 ? (
      <span className="yellow"> {score}</span>
    ) : (
      <span className="red"> {score}</span>
    );
    /*  if (score >= 9) {
      return <span className="green"> {score}</span>;
    } else if (score < 9 && score >= 5) {
      return <span className="yellow"> {score}</span>;
    } else {
      return <span className="red"> {score}</span>;
    } */
  }
  return (
    <div>
      <h3> {movie.title} </h3>
      <p>Director: {movie.director}</p>
      <p>Rating: {generateScore(movie.IMDBRating)}</p>
      {/* {movie.hasOscars && <p>Got the Oscar award</p>}
      {!movie.hasOscars && <p>No Oscar for you!</p>} */}
      {/* {movie.hasOscars ? <p>Got the Oscar award</p> : <p>No Oscar for you!</p>} */}
      <p>{movie.hasOscars ? 'Got the Oscar award' : 'No Oscar for you!'}</p>

      <button onClick={() => clickToDelete(movie._id)}>Delete</button>
    </div>
  );
}

export default MovieCard;
