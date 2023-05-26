import { createSlice } from "@reduxjs/toolkit";
import { getPokemonDetailsThunk } from "../api";
import { createStatsList } from "../Utils/createStatsMap";

const initialState = {
  isLoading: false,
  errors: null,
  name: "",
  stats: [],
  sprites: [],
  abilities: [],
};

const pokemonDetailsSlice = createSlice({
  name: "pokemonDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPokemonDetailsThunk.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPokemonDetailsThunk.fulfilled, (state, { payload }) => {
      const { name, stats, abilities, sprites } = payload;
      state.isLoading = false;
      state.name = name;
      state.stats = createStatsList(stats);
      state.abilities = abilities;
      state.sprites = sprites;
    });
    builder.addCase(getPokemonDetailsThunk.rejected, (state, { error }) => {
      state.isLoading = false;
      state.errors = error;
    });
  },
});

export default pokemonDetailsSlice.reducer;
