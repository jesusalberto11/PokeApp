import React from "react";
import { View, StyleSheet, Text } from "react-native";

const PokemonTypes = ({ types }) => {
  const typeWithCapitalizedFirstLetter = (name) => {
    return <Text>{name.charAt(0).toUpperCase() + name.slice(1)}</Text>;
  };
  return (
    <View style={styles.typesContainer}>
      <Text style={styles.title}>TYPES</Text>
      <View style={styles.types}>
        {types.map((item, id) => {
          return (
            <View key={id} style={styles.button}>
              {typeWithCapitalizedFirstLetter(item.type.name)}
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  typesContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  types: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    flexWrap: "wrap",
    padding: 5,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#A1CFB5",
    borderWidth: 1,
    borderRadius: 50,
    padding: 5,
    width: 100,
  },
});

export default PokemonTypes;
