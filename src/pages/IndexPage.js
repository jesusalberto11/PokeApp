import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { AppStyles } from "../config/Styles";

const IndexPage = () => {
  const [pokemons, setPokemons] = useState([0]);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    fetchPokemonData();
  }, []);

  const fetchPokemonData = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
      .then((response) => onResponse(response))
      .catch((error) => console.log("Error: ", error))
      .finally(() => setIsloading(false));
  };

  const onResponse = (response) => {
    setPokemons(response.data.results);
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.listItem}>
        <Text>{item.name}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text>Hello world from index!</Text>
      <View style={styles.list}>
        {isLoading ? (
          <Text>Is Loading</Text>
        ) : (
          <FlatList
            contentContainerStyle={styles.list}
            data={pokemons}
            keyExtractor={(item) => item.url}
            renderItem={renderItem}
            numColumns={2}
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
  flatList: {
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
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

export default IndexPage;
