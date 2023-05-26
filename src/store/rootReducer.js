import { combineReducers } from "redux";

import dataFetchingReducer from "pages/DataFetching/reducers";
import pokemonDetailsReducer from "pages/PokemonDetails/reducers";
import signInReducer from "pages/SignIn/reducers";
import cartReducer from "pages/Card/reducers";

export const rootReducer = combineReducers({
  auth: signInReducer,
  dataFetching: dataFetchingReducer,
  pokemonDetails: pokemonDetailsReducer,
  cart: cartReducer,
});
