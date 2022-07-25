import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { StyleSheet, View, Text } from "react-native";
import { AppStyles } from "../config/Styles";
import PokemonList from "../components/PokemonList/PokemonList.js";

const IndexPage = ({ navigation }) => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    fetchAllPokemonsData();
  }, []);

  const fetchAllPokemonsData = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
      .then((response) => fetchPokemons(response.data.results))
      .catch((error) => console.log("Error: ", error));
  };

  const fetchPokemons = (pokemonsArr) => {
    pokemonsArr?.map((item) => {
      axios
        .get(item.url)
        .then((response) =>
          setPokemons((pokemons) => [...pokemons, response.data])
        )
        .catch((error) => console.log("Error: ", error))
        .finally(() => setIsloading(false));
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        {isLoading ? (
          <Text>Is Loading</Text>
        ) : (
          <PokemonList pokemons={pokemons} navigation={navigation} />
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
