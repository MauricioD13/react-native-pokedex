import React from "react";
import { Text, FlatList, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { capitalize } from "lodash";

export default function DetailsCard(props) {
  const { details, pokemonColor } = props;

  const textContainer = { color: pokemonColor, ...styles.textContainer };

  if (details.length < 10) {
    return <Text style={textContainer}>{capitalize(details)}</Text>;
  }
  return (
    <FlatList
      data={details}
      numColumns={2}
      keyExtractor={(details) => details}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => <Text>{item}</Text>}
    />
  );
}

const styles = StyleSheet.create({
  textContainer: {
    fontSize: 30,
    top: -5,
  },
});
