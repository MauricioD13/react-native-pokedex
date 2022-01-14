import { API_HOST } from "../utils/constants";

export async function getPokemons(endpointUrl) {
  return fetch(endpointUrl || `${API_HOST}/pokemon?limit=20&offset=0`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => console.error(error));
}

export async function getPokemonDetailsByUrlApi(url) {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}

const loadPokemons = async (response) => {
  const pokemonsArray = [];
  console.log(results.result);
  for await (const pokemon of response.result) {
    console.log(pokemon);
  }
  //   setPokemons(pokemonsArray);
};
