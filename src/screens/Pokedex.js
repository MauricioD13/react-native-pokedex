import React, { useEffect, useState } from "react";
import { View } from "react-native";

import { getPokemons, getPokemonDetailsByUrlApi } from "../api/pokeapi";
import PokemonList from "../components/PokemonList";

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);
  useEffect(() => {
    (async () => {
      loadPokemons();
    })(); // Funcion anonimo autoejecutable
  }, []);

  // Obtener detalles y organizar los pokemones
  const loadPokemons = async () => {
    const response = await getPokemons(nextUrl);
    setNextUrl(response.next);
    const pokemonsArray = [];
    try {
      for await (const pokemon of response.results) {
        const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);
        pokemonsArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          image: pokemonDetails.sprites.other["official-artwork"].front_default,
        });
      }
      setPokemons([...pokemons, ...pokemonsArray]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <PokemonList
        pokemons={pokemons}
        loadPokemons={loadPokemons}
        isNext={nextUrl}
      />
    </View>
  );
}
