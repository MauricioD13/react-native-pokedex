import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { map, capitalize } from "lodash";
import getColorByPokemonType from "../../utils/getColorByPokemonType";

export default function Stats(props) {
  const { stats, pokemonType } = props;
  const strongStat = (num) => {
    if (num > 59) {
      return { backgroundColor: "#8de372", width: `${num}%` };
    } else {
      return {
        backgroundColor: getColorByPokemonType(pokemonType),
        width: `${num}%`,
      };
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Base Stats:</Text>
      {map(stats, (item, index) => (
        <View key={index} style={styles.block}>
          <View style={styles.blockTitle}>
            <Text style={styles.statName}>{capitalize(item.stat.name)}</Text>
          </View>
          <View style={styles.blockInfo}>
            <Text style={styles.number}>{item.base_stat}</Text>
            <View style={styles.bgBar}>
              <View style={[styles.statBar, strongStat(item.base_stat)]}></View>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 50,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 5,
  },
  block: {
    flexDirection: "row",
    paddingVertical: 5,
  },
  blockTitle: {
    width: "30%",
  },
  statName: {
    fontSize: 14,
    color: "grey",
  },
  blockInfo: {
    width: "70%",
    flexDirection: "row",
    alignItems: "center",
  },
  number: {
    width: "12%",
    fontSize: 14,
  },
  bgBar: {
    backgroundColor: "#BABABA",
    width: "88%",
    height: 8,
    borderRadius: 20,
    overflow: "hidden",
  },
  statBar: {
    height: 8,
    borderRadius: 20,
  },
});
