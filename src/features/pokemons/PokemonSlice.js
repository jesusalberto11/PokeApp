import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allPokemons: [],
  isLoading: true,
  appName: "Eduardo",
};

export const pokemonSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {},
});

export default pokemonSlice.reducer;
