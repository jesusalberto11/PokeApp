import React from "react";
import { View, StyleSheet } from "react-native";
import PokemonName from "../components/PokemonPage/PokemonName";
import PokemonImage from "../components/PokemonPage/PokemonImage";
import PokemonBaseStats from "../components/PokemonPage/PokemonBaseStats";
import PokemonTypes from "../components/PokemonPage/PokemonTypes";
import PokemonStats from "../components/PokemonPage/PokemonStats";
import PokemonAbilities from "../components/PokemonPage/PokemonAbilities";

const PokemonPage = ({ route }) => {
  const { pokemon } = route.params;
  return (
    <View style={styles.container}>
      <PokemonName name={pokemon?.name} />
      <PokemonImage imageURL={pokemon?.sprites.front_default} />
      <View style={styles.PokemonDetailsContainer}>
        <PokemonBaseStats
          height={pokemon?.height}
          weight={pokemon?.weight}
          baseXP={pokemon?.base_experience}
        />
        <PokemonTypes types={pokemon?.types} />
        <PokemonStats stats={pokemon?.stats} />
        <PokemonAbilities abilities={pokemon?.abilities} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  PokemonDetailsContainer: {
    flex: 3,
  },
});

export default PokemonPage;
