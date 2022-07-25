import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PokemonPage = ({ route }) => {
  const { pokemon } = route.params;
  return (
    <View style={styles.container}>
      <Text>{pokemon.name} </Text>
      <Text>Pokemon id: {pokemon.id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default PokemonPage;
