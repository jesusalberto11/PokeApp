import React from "react";
import { View, StyleSheet, Text } from "react-native";

const PokemonStats = ({ stats }) => {
  return (
    <View style={styles.statsContainer}>
      {stats.map((item, id) => {
        return (
          <Text key={id}>
            {item.stat.name} - {item.base_stat}
          </Text>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "green",
  },
});

export default PokemonStats;
