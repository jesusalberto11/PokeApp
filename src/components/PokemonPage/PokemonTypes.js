import React from "react";
import { View, StyleSheet, Text } from "react-native";

const PokemonTypes = ({ types }) => {
  return (
    <View style={styles.typesContainer}>
      {types.map((item, id) => {
        return <Text key={id}>Types: {item.type.name}</Text>;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  typesContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "blue",
  },
});

export default PokemonTypes;
