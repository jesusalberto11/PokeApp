import React from "react";
import { StyleSheet, View, FlatList, TouchableOpacity } from "react-native";
import { AppStyles } from "../../config/Styles";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemons }) => {
  const renderItem = ({ item: pokemon }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          console.log(pokemon.id);
        }}
      >
        <PokemonCard pokemon={pokemon} />
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <FlatList
        contentContainerStyle={styles.pokemonList}
        data={pokemons}
        keyExtractor={(pokemon) => pokemon.id}
        renderItem={renderItem}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  pokemonList: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  listItem: {
    backgroundColor: AppStyles.colors.listItemColor,
    width: 150,
    height: 150,
    marginBottom: 10,
    margin: 10,
    borderRadius: 10,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PokemonList;
