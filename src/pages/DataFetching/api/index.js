import { createAsyncThunk } from "@reduxjs/toolkit";
import { mainApi } from "config/mainApi";

const getPokemonsCall = () => mainApi.get("/products");

export const getPokemonsThunk = createAsyncThunk(
  "dataFetching/getPokemons",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getPokemonsCall();

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
