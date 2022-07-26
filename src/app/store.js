import { configureStore } from "@reduxjs/toolkit";
import pokemonSlice from "../features/pokemons/PokemonSlice";

export const store = configureStore({
  reducer: {
    pokemons: pokemonSlice,
  },
});
