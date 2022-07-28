import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  allPokemons: [],
  currentPokemon: [],
  isLoading: true,
  isFetchingNewPokemons: true,
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
    setIsFetchingNewPokemons: (state, action) => {
      /*ESTA VAINA NO SE ACTUALIZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA 
      PINIA > REDUX*/
      const newState = action.payload;
      state.isFetchingNewPokemons = newState;
    },
  },
});

export const {
  addPokemonToStore,
  getPokemonById,
  setIsLoading,
  setIsFetchingNewPokemons,
} = pokemonSlice.actions;

export default pokemonSlice.reducer;
