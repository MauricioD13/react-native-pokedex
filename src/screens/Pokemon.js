import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { capitalize, toUpper } from "lodash";
import { useFonts } from "expo-font";
import Icon from "react-native-vector-icons/FontAwesome5";

//Local imports
import { getPokemonDetailsByIdApi } from "../api/pokeapi";
import DetailsCard from "../components/Pokemon/DetailsCard";
import Header from "../components/Pokemon/Header";
import Type from "../components/Pokemon/Type";
import Stats from "../components/Pokemon/Stats";

export default function Pokemon(props) {
  const {
    navigation,
    route: { params },
  } = props;

  // Fuente
  const [loaded] = useFonts({
    Cormorant: require("../assets/fonts/Cormorant-Bold.ttf"),
  });
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Icon
          name="heart"
          color="white"
          size={20}
          style={{ marginRight: 20 }}
          onPress={() => console.log("Queda pendiente")}
        />
      ),
      headerLeft: () => (
        <Icon
          name="arrow-left"
          color="white"
          size={20}
          style={{ marginLeft: 20 }}
          onPress={() => navigation.goBack()}
        />
      ),
    });
  });

  // Al rederizar la screen
  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonDetailsByIdApi(params.id);
        setPokemon(response);
      } catch (err) {
        navigation.goBack();
      }
    })();
  }, []);

  if (!pokemon) return null;

  return (
    <ScrollView>
      <Header
        name={pokemon.name}
        imageUrl={pokemon.sprites.other["official-artwork"].front_default}
        order={pokemon.order}
        pokemonType={pokemon.types[0].type.name}
      />
      <Type types={pokemon.types} />
      <Stats stats={pokemon.stats} pokemonType={pokemon.types[0].type.name} />
    </ScrollView>
  );
}
