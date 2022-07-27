import React from "react";
import { View, StyleSheet, Text } from "react-native";
import * as Progress from "react-native-progress";

const PokemonStats = ({ stats }) => {
  const handleNameLength = (item) => {
    let name = item.stat.name;

    if (name === "special-attack")
      return <Text style={styles.statsName}>S.ATK</Text>;
    if (name === "special-defense")
      return <Text style={styles.statsName}>S.DEF</Text>;
    else return <Text style={styles.statsName}>{name.toUpperCase()}</Text>;
  };

  return (
    <View style={styles.statsContainer}>
      <Text style={styles.title}>BASE STATS</Text>
      {stats.map((item, id) => {
        return (
          <View key={id} style={styles.statsItem}>
            <View style={styles.statsName}>
              <Text>{handleNameLength(item)}</Text>
            </View>
            <View style={styles.statsValues}>
              <View style={styles.statNumber}>
                <Text>{item.base_stat}</Text>
              </View>
              <View style={styles.bar}>
                <Progress.Bar progress={item.base_stat / 100} width={100} />
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  statsContainer: {
    flex: 0.5,
    padding: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  statsItem: {
    flex: 1,
    flexDirection: "row",
    padding: 5,
    borderWidth: 0.5,
  },
  statsName: {
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
  },
  statsValues: {
    flex: 3,
    flexDirection: "row",
  },
  statNumber: {
    flex: 1,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  bar: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PokemonStats;
