/* fetch('https://api.spacexdata.com/v4/launches')
  .then((response) => {
    //JSON - Javascript Object Notation
    //transform the response into Json
    return response.json();
  })
  .then((data) => {
    //console.log('Parsed data: ', data);
    data.forEach((launchObj) => {
      const patchImage = launchObj.links.patch.small;
      const imgElement = document.createElement('img');

      imgElement.setAttribute('src', patchImage);
      imgElement.setAttribute('width', 200);

      document.body.appendChild(imgElement);
    });
  })
  .catch((err) => console.log(err)); */

/* async function displayPatches(limit) {
  try {
    const responseFromAPI = await fetch('https://api.spacexdata.com/v4/launches');
    const jsonResponse = await responseFromAPI.json();
    const firstObj = jsonResponse[0];
    console.log(firstObj);

    const launchesToDisplay = jsonResponse.slice(0, limit);

    //console.log(jsonResponse);
    launchesToDisplay.forEach((launchObj) => {
      const patchImage = launchObj.links.patch.small;
      const imgElement = document.createElement('img');

      imgElement.setAttribute('src', patchImage);
      imgElement.setAttribute('width', 200);

      document.body.appendChild(imgElement);
    });
  } catch (err) {
    console.log('Something went wrong!', err);
  }
} */

//displayPatches(50);

//fecth a pokemon from pokeapi.co
//On your webpage show: The name, an image and the type

async function displayPokemon(pokemon) {
  try {
    const responseFromAPI = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const jsonResponse = await responseFromAPI.json();

    //const launchesToDisplay = jsonResponse.slice(0, limit);

    console.log(jsonResponse);
    const pokemonName = jsonResponse.name;
    const sprite = jsonResponse.sprites.front_default;
    const mainType = jsonResponse.types[0].type.name;

    const pokeball = document.createElement('div');

    pokeball.innerHTML = `<h1>${pokemonName}</h1>
    <img src=${sprite}>
    <p>${mainType}</p>`;

    document.body.appendChild(pokeball);
  } catch (err) {
    console.log('Something went wrong!', err);
  }
}

displayPokemon('charmander');
