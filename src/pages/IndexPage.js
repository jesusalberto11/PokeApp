import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { StyleSheet, View, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
  addPokemonToStore,
  setIsLoading,
  setFetchingNewPokemonsStart,
  setFetchingNewPokemonsEnded,
} from "../features/pokemons/PokemonSlice";
import { AppStyles } from "../config/Styles";
import PokemonList from "../components/PokemonList/PokemonList.js";

const IndexPage = ({ navigation }) => {
  const [pokemonURL, setPokemonURL] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=25&offset=0"
  );
  const [nextURL, setNextURL] = useState("");
  const pokemonStore = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchAllPokemonsData();
  }, []);

  const fetchAllPokemonsData = () => {
    dispatch(setIsLoading(true));
    axios
      .get(pokemonURL)
      .then((response) => fetchPokemons(response))
      .catch((error) => console.log("Error: ", error));
  };

  const fetchNewPage = () => {
    dispatch(setFetchingNewPokemonsStart());
    console.log("before fetch: ", pokemonStore.isFetchingNewPokemons);

    axios
      .get(nextURL)
      .then((response) => fetchPokemons(response))
      .catch((error) => console.log("Error: ", error));
  };

  const fetchPokemons = (response) => {
    let pokemonsArr = response.data.results;
    setNextURL(response.data.next);

    for (let index = 0; index < pokemonsArr.length; index++) {
      axios
        .get(pokemonsArr[index].url)
        .then((response) => dispatch(addPokemonToStore(response.data)))
        .catch((error) => console.log("Error: ", error));
    }

    dispatch(setIsLoading(false));
    dispatch(setFetchingNewPokemonsEnded());
  };

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        {pokemonStore.isLoading ? (
          <Text>Is Loading</Text>
        ) : (
          <PokemonList
            pokemons={pokemonStore.allPokemons}
            navigation={navigation}
            fetchNewPage={fetchNewPage}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppStyles.colors.backgroundColor,
  },
  list: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default IndexPage;
