import React from "react";
import { View, StyleSheet, Text } from "react-native";

const PokemonAbilities = ({ abilities }) => {
  return (
    <View style={styles.abilitiesContainer}>
      <Text style={styles.title}>ABILITIES</Text>
      <View style={styles.abilities}>
        {abilities.map((item, id) => {
          return (
            <View key={id} style={styles.abilitiesHolder}>
              <Text style={styles.abilityName}>
                {item.ability.name.toUpperCase()}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  abilitiesContainer: {
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
  abilities: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    flexWrap: "wrap",
    padding: 5,
  },
  abilitiesHolder: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFB4B4",
    borderWidth: 1,
    borderRadius: 50,
    padding: 5,
    width: 100,
  },
  abilityName: {
    textAlign: "center",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default PokemonAbilities;
