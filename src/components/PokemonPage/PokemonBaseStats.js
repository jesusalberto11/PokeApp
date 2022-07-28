import React from "react";
import { View, StyleSheet, Text } from "react-native";

const PokemonBaseStats = ({ height, weight, baseXP }) => {
  return (
    <View style={styles.pokemonBaseStatsContainer}>
      <View style={styles.statContainer}>
        <Text>{height / 10} m</Text>
        <Text style={{ fontWeight: "bold" }}>HEIGHT</Text>
      </View>
      <View style={styles.statContainer}>
        <Text>{weight / 10} kg</Text>
        <Text style={{ fontWeight: "bold" }}>WEIGHT</Text>
      </View>
      <View style={styles.statContainer}>
        <Text>{baseXP}</Text>
        <Text style={{ fontWeight: "bold" }}>BASE XP</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pokemonBaseStatsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "#A2BAB9",
  },
  statContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PokemonBaseStats;
