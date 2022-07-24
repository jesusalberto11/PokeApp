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
    <View style={styles.pokemonListContainer}>
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
  pokemonListContainer: {
    flex: 1,

    padding: 5,
  },
  pokemonList: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
});

export default PokemonList;
