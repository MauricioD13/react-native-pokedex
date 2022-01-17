import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { map } from "lodash";

export default function Moves(props) {
  const { moves } = props;

  const aux = [];
  const formatMoves = [];
  moves.forEach((item) => {
    aux.push(item.move.name);
  });
  for (let i = 0; i < aux.length / 2; i += 2) {
    formatMoves.push([aux[i], aux[i + 1]]);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Movimientos:</Text>
      {map(formatMoves, (item, index) => (
        <View key={index} style={styles.pill}>
          <View style={styles.itemPill}>
            <Text style={styles.textMove}>{item[0]}</Text>
          </View>
          <View style={styles.itemPill}>
            <Text style={styles.textMove}>{item[1]}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 5,
    marginBottom: 10,
  },
  container: {
    paddingHorizontal: 20,
    marginBottom: 50,
  },
  pill: {
    flexDirection: "row",
    width: 800,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  itemPill: {
    width: "20%",
    backgroundColor: "#c5c5c5",
    paddingHorizontal: 10,
    marginHorizontal: 10,
    marginBottom: 8,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  textMove: {
    fontWeight: "bold",
  },
});
