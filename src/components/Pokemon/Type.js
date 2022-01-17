import { map } from "lodash";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import getColorByPokemonType from "../../utils/getColorByPokemonType";

export default function Type(props) {
  const { types } = props;

  return (
    <View style={styles.typesView}>
      {map(types, (item, index) => (
        <View
          key={index}
          style={{
            backgroundColor: getColorByPokemonType(item.type.name),
            ...styles.pill,
          }}
        >
          <Text style={styles.typeText}>{item.type.name}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  typeText: {
    fontWeight: "bold",
  },
  typesView: {
    flexDirection: "row",
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  pill: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
    marginHorizontal: 5,
  },
});

/* <Text style={styles.typeText}>{types[0].type.name}</Text>; */
