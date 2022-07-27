import React, { memo } from "react";
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
        <Text style={styles.pokemonName}>{pokemon?.name.toUpperCase()}</Text>
        <Text>{pokemon?.types[0].type.name.toUpperCase()}</Text>
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

    borderWidth: 1,
    borderRadius: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
  pokemonImage: {
    flex: 2,
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
  pokemonDetails: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  pokemonName: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default memo(PokemonCard);
