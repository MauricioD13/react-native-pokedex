import React from "react";
import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import { capitalize } from "lodash";
import getColorByPokemonType from "../../utils/getColorByPokemonType";
//Arreglar

export default function Header(props) {
  const { name, imageUrl, order, pokemonType } = props;
  //Background Color
  const pokemonColor = getColorByPokemonType(pokemonType);
  const bgView = { backgroundColor: pokemonColor, ...styles.bgView };
  return (
    <>
      <View style={bgView} />
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.pokemonName}>{capitalize(name)}</Text>
          <Text style={styles.pokemonName}> #{`${order}`.padStart(3, 0)} </Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: imageUrl,
            }}
            style={styles.image}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  bgView: {
    width: "100%",
    height: 400,
    position: "absolute",
    borderBottomEndRadius: 300,
    borderBottomLeftRadius: 300,
    transform: [{ scaleX: 2 }],
  },
  container: {
    marginTop: 60,
  },
  textContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  pokemonName: {
    fontWeight: "bold",
    fontFamily: "Cormorant",
    color: "white",
    fontSize: 30,
    marginTop: 10,
  },
  image: {
    width: 250,
    height: 250,
    top: 5,
  },
  imageContainer: {
    alignItems: "center",
  },
});
