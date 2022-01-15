import { flushSync } from "react-dom";
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

export async function getPokemonDetailsByIdApi(id) {
  const url = `${API_HOST}/pokemon/${id}`;
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => console.error(error));
}
