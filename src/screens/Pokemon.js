import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { capitalize } from "lodash";
import { useFonts } from "expo-font";

import { getPokemonDetailsByIdApi } from "../api/pokeapi";
import getColorByPokemonType from "../utils/getColorByPokemonType";
import MovesList from "../components/MovesList";

export default function Pokemon(props) {
  const {
    navigation,
    route: { params },
  } = props;
  const [loaded] = useFonts({
    Cormorant: require("../assets/fonts/Cormorant-Bold.ttf"),
  });

  const [pokemon, setPokemon] = useState(null);
  const [moves, setMoves] = useState(null);
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

  const mov = [];
  pokemon.moves.forEach((item) => mov.push(item.move.name));
  //setMoves(mov);

  const pokemonType = pokemon.types[0].type.name;
  const pokemonColor = getColorByPokemonType(pokemonType);
  const bgView = { backgroundColor: pokemonColor, ...styles.bgView };

  return (
    <View style={bgView}>
      <View>
        <Text style={styles.pokemonName}>{capitalize(pokemon.name)}</Text>
        <Image
          source={{ uri: pokemon.sprites.front_default }}
          style={styles.image}
        />
        {/* <MovesList moves={moves} /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bgView: {
    borderRadius: 70,
    flex: 1,
    padding: 40,
    marginTop: 10,
    marginBottom: 40,
  },
  pokemonName: {
    fontWeight: "bold",
    fontFamily: "Cormorant",
    fontSize: 30,
  },
  image: {
    width: 150,
    height: 100,
    left: 200,
    top: -60,
  },
  characteristics: {
    fontSize: 20,
  },
});
