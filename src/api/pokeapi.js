import { API_HOST } from "../utils/constants";

export async function getPokemons() {
  return fetch(`${API_HOST}/pokemon?limit=20&offset=0`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => console.error(error));
}
