import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

import { getPokemons } from "../api/pokeapi";

export default function Pokedex() {
  useEffect(() => {
    (async () => {
      const results = await getPokemons();
      console.log(results);
    })(); // Funcion anonimo autoejecutable
  });
  return (
    <View>
      <Text>Estamos en Pokedex</Text>
    </View>
  );
}
