import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { AppStyles } from "../../config/Styles";

const PokemonCard = ({ pokemon }) => {
  return (
    <View style={styles.listItem}>
      <View style={styles.pokemonImage}>
        <Image
          style={styles.tinyLogo}
          source={{ uri: pokemon?.sprites.front_default }}
        />
      </View>
      <View style={styles.pokemonDetails}>
        <Text style={styles.pokemonName}>{pokemon?.name}</Text>
        <Text>Type: {pokemon?.types[0].type.name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: AppStyles.colors.listItemColor,
    width: 150,
    height: 150,
    marginBottom: 10,
    margin: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  pokemonImage: {
    flex: 2,
    backgroundColor: "blue",
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
  pokemonDetails: {
    flex: 1,
    backgroundColor: "red",
  },
  pokemonName: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default PokemonCard;
