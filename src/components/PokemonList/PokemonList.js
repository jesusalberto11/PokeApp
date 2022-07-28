import React from "react";
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import PokemonCard from "./PokemonCard";
import { useSelector } from "react-redux";

const PokemonList = ({ pokemons, navigation, fetchNewPage }) => {
  const pokemonStore = useSelector((state) => state.pokemons);

  const renderItem = ({ item: pokemon }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("PokemonPage", { pokemon });
        }}
      >
        <PokemonCard pokemon={pokemon} />
      </TouchableOpacity>
    );
  };

  const showLoadingToast = () => {
    ToastAndroid.showWithGravity(
      "¡Loading new pokemons!",
      ToastAndroid.LONG,
      ToastAndroid.CENTER
    );
  };

  const handleOnEndReached = () => {
    console.log(pokemonStore.isFetchingNewPokemons);
    showLoadingToast(), fetchNewPage();
  };

  return (
    <View style={styles.pokemonListContainer}>
      <FlatList
        contentContainerStyle={styles.pokemonList}
        data={pokemons}
        keyExtractor={(pokemon) => pokemon.id}
        renderItem={renderItem}
        numColumns={2}
        onEndReachedThreshold={0.1}
        onEndReached={handleOnEndReached}
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
