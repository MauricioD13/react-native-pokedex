import React from "react";
import { View, Text } from "react-native";

import DetailsCard from "./DetailsCard";

//Arreglar
const titleCard = () => (
  <View>
    <Text style={styles.pokemonName}>{capitalize(pokemon.name)}</Text>
  </View>
);

const imageCard = () => (
  <View>
    <Image
      source={{
        uri: pokemon.sprites.other["official-artwork"].front_default,
      }}
      style={styles.image}
    />
  </View>
);

const detailsContainer = ({ title, details }) => (
  <View style={styles.detailsContainer}>
    <Text style={styles.textContainer}>{title}: </Text>
    <DetailsCard details={details} pokemonColor={pokemonColor} />
  </View>
);

export default function Header() {
  return <View></View>;
}
