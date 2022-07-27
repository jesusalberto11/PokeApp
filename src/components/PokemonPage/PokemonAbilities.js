import React from "react";
import { View, StyleSheet, Text } from "react-native";

const PokemonAbilities = ({ abilities }) => {
  return (
    <View style={styles.abilitiesContainer}>
      {abilities.map((item, id) => {
        return <Text key={id}>{item.ability.name}</Text>;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  abilitiesContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "yellow",
  },
});

export default PokemonAbilities;
