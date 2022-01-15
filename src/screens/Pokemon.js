import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { capitalize } from "lodash";
import { useFonts } from "expo-font";

import { getPokemonDetailsByIdApi } from "../api/pokeapi";
import getColorByPokemonType from "../utils/getColorByPokemonType";

export default function Pokemon(props) {
  const {
    navigation,
    route: { params },
  } = props;
  const [loaded] = useFonts({
    Cormorant: require("../assets/fonts/Cormorant-Bold.ttf"),
  });

  const [pokemon, setPokemon] = useState(null);
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

  const moves = [];

  pokemon.moves.forEach((item) => moves.push(item.move.name));

  //Background Color
  const pokemonType = pokemon.types[0].type.name;
  const pokemonColor = getColorByPokemonType(pokemonType);
  const bgView = { backgroundColor: pokemonColor, ...styles.bgView };

  console.log(titleCard);
  moves;
  pokemon.types[0].type.name;
  return (
    <ScrollView contentContainerStyle={bgView}>
      {/* Arreglar */}
      <titleCard />
      <imageCard />
      <detailsContainer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  bgView: {
    width: "100%",
    position: "absolute",
    borderBottomEndRadius: 300,
    borderBottomLeftRadius: 300,
    //flex: 1,
    padding: 10,
    //marginTop: 10,
    //marginBottom: 10,
    alignItems: "center",
  },
  container: {
    flexDirection: "column",
  },
  pokemonName: {
    fontWeight: "bold",
    fontFamily: "Cormorant",
    fontSize: 30,
  },
  image: {
    width: 200,
    height: 200,
  },
  textContainer: {
    fontSize: 20,
    fontWeight: "bold",
  },
  detailsContainer: {
    padding: 10,
    height: 105,
    backgroundColor: "grey",
    borderRadius: 20,
    marginTop: 20,
  },
});
