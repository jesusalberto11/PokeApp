import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
  name: "pokemonlist",
  initialState: {
    allPokemons: [],
    currentPokemon: [],
    isLoading: true,
    isFetchingNewPokemons: true,
    currentPage: 1,
  },
  reducers: {
    addPokemonToStore: (state, action) => {
      state.allPokemons = [...state.allPokemons, action.payload];
    },
    cleanPokemons: (state) => {
      state.allPokemons = [];
    },
    getPokemonById: (state, action) => {
      let finded = state.allPokemons.filter((pkm) => pkm.id === action.payload);

      state.currentPokemon = finded[0];
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { addPokemonToStore, setIsLoading, cleanPokemons } =
  pokemonSlice.actions;

export default pokemonSlice.reducer;
