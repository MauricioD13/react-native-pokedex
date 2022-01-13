import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

import { getPokemons, getPokemonDetailsByUrlApi } from "../api/pokeapi";

export default function Pokedex() {
  const [pokemos, setPokemons] = useState([]);
  useEffect(() => {
    (async () => {
      const results = await getPokemons();
      console.log(results);
    })(); // Funcion anonimo autoejecutable
  });

  const loadPokemons = async (response) => {
    const pokemonsArray = [];
    setPokemons(pokemonsArray);
    for await (pokemon of response.result) {
      console.log(pokemon);
    }
  };

  return (
    <View>
      <Text>Estamos en Pokedex</Text>
    </View>
  );
}
