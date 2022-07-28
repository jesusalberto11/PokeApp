import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { StyleSheet, View, Text, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
  addPokemonToStore,
  setIsLoading,
  cleanPokemons,
} from "../features/pokemons/PokemonSlice";
import { AppStyles } from "../config/Styles";
import PokemonList from "../components/PokemonList/PokemonList.js";

const IndexPage = ({ navigation }) => {
  const [pokemonURL, setPokemonURL] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=25&offset=0"
  );
  const [nextURL, setNextURL] = useState("");
  const [previousURL, setPreviousURL] = useState("");
  const pokemonStore = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchAllPokemonsData();
  }, []);

  const fetchAllPokemonsData = () => {
    axios
      .get(pokemonURL)
      .then((response) => fetchPokemons(response))
      .catch((error) => console.log("Error: ", error));
  };

  const fetchNewPage = () => {
    if (nextURL === null || nextURL === undefined) return;

    axios
      .get(nextURL)
      .then((response) => fetchPokemons(response))
      .catch((error) => console.log("Error: ", error));
  };

  const fetchPreviousPage = () => {
    if (previousURL === null || previousURL === undefined) return;

    axios
      .get(previousURL)
      .then((response) => fetchPokemons(response))
      .catch((error) => console.log("Error: ", error));
  };

  const fetchPokemons = (response) => {
    let pokemonsArr = response.data.results;

    setNextURL(response.data.next);
    setPreviousURL(response.data.previous);

    dispatch(cleanPokemons());
    dispatch(setIsLoading(true));

    for (let index = 0; index < pokemonsArr.length; index++) {
      axios
        .get(pokemonsArr[index].url)
        .then((response) => dispatch(addPokemonToStore(response.data)))
        .catch((error) => console.log("Error: ", error));
    }
    dispatch(setIsLoading(false));
  };

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        {pokemonStore.allPokemons.length !== 25 ? (
          <Text>Is Loading</Text>
        ) : (
          <View>
            <PokemonList
              pokemons={pokemonStore.allPokemons}
              navigation={navigation}
              fetchNewPage={fetchNewPage}
              fetchPreviousPage={fetchPreviousPage}
            />
            <View style={styles.buttonsContainer}>
              <Button
                onPress={fetchPreviousPage}
                title="Previous"
                color={AppStyles.colors.listItemColor}
                accessibilityLabel="Fetch previous page"
                disabled={previousURL === null || previousURL === undefined}
              />
              <Button
                onPress={fetchNewPage}
                title="Next"
                color={AppStyles.colors.listItemColor}
                accessibilityLabel="Fetch next page"
                disabled={nextURL === null || nextURL === undefined}
              />
            </View>
          </View>
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
  buttonsContainer: {
    backgroundColor: AppStyles.colors.headerColor,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
    height: 50,
  },
});

export default IndexPage;
