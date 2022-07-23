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
          <img src={pokemon?.sprites.front_default} />
          <Text>{pokemon?.name}</Text>
          <Text>{pokemon?.id}</Text>
          <Text>{pokemon?.order}</Text>
          <Text>{pokemon?.base_experience}</Text>
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
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PokemonList;
