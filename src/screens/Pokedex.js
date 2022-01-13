import React, { useEffect, useState } from "react";
import { View } from "react-native";

import { getPokemons, getPokemonDetailsByUrlApi } from "../api/pokeapi";
import PokemonList from "../components/PokemonList";

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await getPokemons();
      loadPokemons(response);
    })(); // Funcion anonimo autoejecutable
  }, []);

  // Obtener detalles y organizar los pokemones
  const loadPokemons = async (response) => {
    const pokemonsArray = [];
    try {
      for await (const pokemon of response.results) {
        const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);
        pokemonsArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].name,
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
      <PokemonList pokemons={pokemons} />
    </View>
  );
}
