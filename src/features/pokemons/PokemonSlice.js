import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  allPokemons: [],
  currentPokemon: [],
  isLoading: true,
};

export const pokemonSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    addPokemonToStore: (state, action) => {
      state.allPokemons = [...state.allPokemons, action.payload];
    },
    getPokemonById: (state, action) => {
      const pokemons = current(state.allPokemons);
      let finded = pokemons.filter((pkm) => pkm.id === action.payload);

      state.currentPokemon = finded[0];
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { addPokemonToStore, getPokemonById, setIsLoading } =
  pokemonSlice.actions;

export default pokemonSlice.reducer;
