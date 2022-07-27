import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { StyleSheet, View, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
  addPokemonToStore,
  setIsLoading,
} from "../features/pokemons/PokemonSlice";
import { AppStyles } from "../config/Styles";
import PokemonList from "../components/PokemonList/PokemonList.js";

const IndexPage = ({ navigation }) => {
  const pokemonStore = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchAllPokemonsData();
  }, []);

  const fetchAllPokemonsData = () => {
    dispatch(setIsLoading(true));
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
      .then((response) => fetchPokemons(response.data.results))
      .catch((error) => console.log("Error: ", error));
  };

  const fetchPokemons = (pokemonsArr) => {
    pokemonsArr?.map((item) => {
      axios
        .get(item.url)
        .then((response) => dispatch(addPokemonToStore(response.data)))
        .catch((error) => console.log("Error: ", error))
        .finally(() => dispatch(setIsLoading(false)));
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        {pokemonStore.allPokemons.length !== 20 ? (
          <Text>Is Loading</Text>
        ) : (
          <PokemonList
            pokemons={pokemonStore.allPokemons}
            navigation={navigation}
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
