import React from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { AppStyles } from "../../config/Styles";

const PokemonList = ({ pokemons }) => {
  const renderItem = ({ item: pokemon }) => {
    if (!pokemon) return;
    return (
      <TouchableOpacity
        onPress={() => {
          console.log(pokemon.id);
        }}
      >
        <View style={styles.listItem}>
          <View style={styles.pokemonImage}>
            <img
              src={pokemon?.sprites.front_default}
              width={100}
              height={100}
              alt={pokemon?.name}
            />
          </View>
          <View style={styles.pokemonDetails}>
            <Text style={styles.pokemonName}>{pokemon?.name}</Text>
            <Text>Type: {pokemon?.types[0].type.name}</Text>
          </View>
        </View>
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
  pokemonImage: {
    flex: 2,
    backgroundColor: "blue",
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

export default PokemonList;
