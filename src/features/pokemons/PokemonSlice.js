import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
  name: "pokemonlist",
  initialState: {
    allPokemons: [],
    currentPokemon: [],
    isLoading: true,
    isFetchingNewPokemons: true,
  },
  reducers: {
    addPokemonToStore: (state, action) => {
      state.allPokemons = [...state.allPokemons, action.payload];
    },
    getPokemonById: (state, action) => {
      let finded = state.allPokemons.filter((pkm) => pkm.id === action.payload);

      state.currentPokemon = finded[0];
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setFetchingNewPokemonsStart: (state) => {
      /*POR ALGUNA RAZÓN NIGUNO SIRVE*/
      state.isFetchingNewPokemons = state.isFetchingNewPokemons;
    },
    setFetchingNewPokemonsEnded: (state) => {
      state.isFetchingNewPokemons = !state.isFetchingNewPokemons;
    },
  },
});

export const {
  addPokemonToStore,
  getPokemonById,
  setIsLoading,
  setFetchingNewPokemonsStart,
  setFetchingNewPokemonsEnded,
} = pokemonSlice.actions;

export default pokemonSlice.reducer;
