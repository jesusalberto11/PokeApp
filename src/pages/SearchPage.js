import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";

const SearchPage = ({ navigation }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = () => {
    if (
      searchInput === "" ||
      searchInput === null ||
      searchInput === undefined
    ) {
      showErrorToast("Search input its empty...");
      return;
    }

    let pokemonToSearch = searchInput.toLocaleLowerCase();
    let pokemonURL = `https://pokeapi.co/api/v2/pokemon/${pokemonToSearch}`;

    searchPokemon(pokemonURL);
    setSearchInput("");
  };

  const searchPokemon = async (pokemonURL) => {
    await axios
      .get(pokemonURL)
      .then((response) => handleResponse(response))
      .catch((error) => showErrorToast("Can't find that Pokemon..."));
  };

  const handleResponse = (response) => {
    if (response.status === 404) return;

    let pokemon = response.data;
    navigation.navigate("PokemonPage", { pokemon });
  };

  const showErrorToast = (toastMessage) => {
    ToastAndroid.showWithGravity(
      toastMessage,
      ToastAndroid.LONG,
      ToastAndroid.CENTER
    );
  };

  return (
    <View style={styles.SearchPageContainer}>
      <TextInput
        blurOnSubmit={true}
        placeholder="Search pokemon..."
        style={styles.input}
        value={searchInput}
        onChangeText={setSearchInput}
        maxLength={100}
      />
      <TouchableOpacity style={styles.button} onPress={handleSearch}>
        <Text>Search pokemon</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  SearchPageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "90%",
    height: 50,
    padding: 10,
    margin: 15,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 5,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#6ddccf",
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
});

export default SearchPage;
