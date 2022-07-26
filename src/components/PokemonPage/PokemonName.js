import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PokemonName = ({ name }) => {
  return (
    <View style={styles.pokemonNameContainer}>
      <Text style={styles.pokemonName}>{name.toUpperCase()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  pokemonNameContainer: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  pokemonName: {
    fontSize: 36,
    fontWeight: "bold",
  },
});

export default PokemonName;
