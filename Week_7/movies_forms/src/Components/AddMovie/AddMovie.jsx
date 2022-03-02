import React, { useState } from 'react';

function AddMovie(props) {
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');
  const [IMDBRating, setIMDBRating] = useState(0);
  const [hasOscars, setHasOscars] = useState(false);

  const handleTitleInput = (e) => setTitle(e.target.value);
  const handleDirectorInput = (e) => setDirector(e.target.value);
  const handleIMDBRatingInput = (e) => setIMDBRating(e.target.value);
  const handleHasOscarsInput = (e) => setHasOscars(e.target.checked);

  const handleSubmit = (e) => {
    e.preventDefault();
    const randomId = Math.random() * 1000000000;
    const newMovie = { _id: randomId, title, director, IMDBRating, hasOscars };

    props.addMovie(newMovie);
    setTitle('');
    setDirector('');
    setIMDBRating(0);
    setHasOscars(false);
  };

  return (
    <div>
      <h2>Add Movie</h2>
      <form onSubmit={handleSubmit}>
        <label> Title:</label>
        <input type="text" name="title" value={title} onChange={handleTitleInput} />
        <label> Director:</label>
        <input type="text" name="director" value={director} onChange={handleDirectorInput} />
        <label> Rating:</label>
        <input
          type="number"
          name="IMDBRating"
          value={IMDBRating}
          onChange={handleIMDBRatingInput}
        />
        <label> Won Oscar:</label>
        <input type="checkbox" name="hasOscars" value={hasOscars} onChange={handleHasOscarsInput} />

        <button type="submit"> Add a Movie</button>
      </form>
    </div>
  );
}

export default AddMovie;
