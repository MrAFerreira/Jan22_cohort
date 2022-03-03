import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Pokemon() {
  const [pokemonInput, setPokemonInput] = useState('');

  const [getPokemon, setGetPokemon] = useState('psyduck');

  const [pokemon, setPokemon] = useState(null);

  // useEffect(() => { codegoeshere }, [depency1, dependency2])

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${getPokemon}`)
      .then((response) => {
        console.log(response.data);
        setPokemon(response.data);
      })
      .catch((err) => {
        console.log(err);
        setGetPokemon('pikachu');
      });
  }, [getPokemon]);

  const handlePokemonInput = (e) => setPokemonInput(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    setGetPokemon(pokemonInput);
    console.log(getPokemon);
  };

  //UseState
  //Render
  //Useffect (fetching)
  //Changing state
  //Component re-renders

  return (
    <div>
      <h2>Pokemon Details</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="pokemon" onChange={handlePokemonInput} />
        <button>Search</button>
      </form>
      {pokemon ? (
        <>
          <h1>{pokemon.name}</h1>
          <img src={pokemon.sprites.front_default} alt="Pokemon" />
        </>
      ) : (
        <h1>No pokemon found</h1>
      )}
    </div>
  );
}

export default Pokemon;
