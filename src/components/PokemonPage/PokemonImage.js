import React from "react";
import { View, StyleSheet, Image } from "react-native";

const PokemonImage = ({ imageURL }) => {
  return (
    <View style={styles.pokemonImageContainer}>
      <Image style={styles.pokemonImage} source={{ uri: imageURL }} />
    </View>
  );
};

const styles = StyleSheet.create({
  pokemonImageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  pokemonImage: {
    flex: 1,
    height: 20,
    width: 200,
  },
});

export default PokemonImage;
