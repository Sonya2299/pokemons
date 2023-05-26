import { pokemonApiConfig as pokemonApi } from "../../../config/pokemonApi";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { mainApi } from "config/mainApi";
import pick from "lodash/pick";

const getPokemonByName = (name) => pokemonApi.get(`/pokemon/${name}`);

export const getPokemonDetailsThunk = createAsyncThunk(
  "pokemonDetails/getDetailsByName",
  async (name) => {
    const response = await getPokemonByName(name);

    return pick(response.data, ["name", "stats", "abilities", "sprites"]);
  }
);
