import React from "react";
import { View, StyleSheet, Text } from "react-native";

const PokemonBaseStats = ({ height, weight, baseXP }) => {
  return (
    <View style={styles.PokemonBaseStatsContainer}>
      <Text>Height: {height / 10} m</Text>
      <Text>Weight: {weight / 10} kg</Text>
      <Text>Base XP: {baseXP}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  PokemonBaseStatsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "red",
  },
});

export default PokemonBaseStats;
