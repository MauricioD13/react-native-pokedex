import React from "react";
import { StyleSheet, Text, FlatList } from "react-native";

export default function MovesList(props) {
  const { moves } = props;
  console.log(moves);
  return (
    <FlatList
      data={moves}
      numColumns={1}
      showsVerticalScrollIndicator={false}
      keyExtractor={(moves) => moves}
      renderItem={(item) => <Text>Aqui estoy{item}</Text>}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    color: "black",
  },
});
