import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const PokemonPage = ({ route }) => {
  const { pokemon } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.pokemonNameContainer}>
        <Text style={styles.pokemonName}>{pokemon?.name}</Text>
      </View>
      <View style={styles.pokemonImageContainer}>
        <Image
          style={styles.pokemonImage}
          source={{ uri: pokemon?.sprites.front_default }}
        />
      </View>
      <View style={styles.PokemonDetailsContainer}>
        <View style={styles.PokemonBaseStatsContainer}>
          <Text style={{}}>Height: {pokemon?.height / 10} m</Text>
          <Text>Weight: {pokemon?.weight / 10} kg</Text>
          <Text>Base XP: {pokemon?.base_experience}</Text>
        </View>
        <Text>Species: {pokemon?.species.name}</Text>

        {pokemon?.types.map((item, id) => {
          return <Text key={id}>Types: {item.type.name}</Text>;
        })}
        {pokemon?.stats.map((item, id) => {
          return (
            <Text key={id}>
              {item.stat.name} - {item.base_stat}
            </Text>
          );
        })}
        {pokemon?.abilities.map((item, id) => {
          return <Text key={id}>{item.ability.name}</Text>;
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  pokemonImageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  pokemonImage: {
    flex: 1,
    height: 20,
    width: 200,
  },
  pokemonNameContainer: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  pokemonName: {
    fontSize: 36,
    fontWeight: "200",
  },
  PokemonDetailsContainer: {
    flex: 3,
  },
  PokemonBaseStatsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "red",
  },
});

export default PokemonPage;
