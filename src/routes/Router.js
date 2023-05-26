import { Route, Routes } from "react-router-dom";

import { ROUTE_NAMES } from "./routeNames";

import DataFetchingContainer from "pages/DataFetching/containers/DataFetchingContainer";
import PokemonDetailsContainer from "pages/PokemonDetails/containers/PokemonDetailsContainer";
import SignUpContainer from "pages/SignUp/containers/SignUpContainer";
import SignInContainer from "pages/SignIn/containers/SignInContainer";
import HomePageView from "pages/Home/containers/homePageView";
import PrivateRoute from "./PrivateRoute";
import CartContainer from "pages/Card/containers/CartContainer";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE_NAMES.HOME} element={<HomePageView />} />

      <Route
        path={ROUTE_NAMES.POKEMONS}
        element={
          <PrivateRoute>
            <DataFetchingContainer />
          </PrivateRoute>
        }
      />
      <Route
        path={ROUTE_NAMES.POKEMON_DETAILS}
        element={
          <PrivateRoute>
            <PokemonDetailsContainer />
          </PrivateRoute>
        }
      />
      <Route
        path={ROUTE_NAMES.CART}
        element={
          <PrivateRoute>
            <CartContainer />
          </PrivateRoute>
        }
      />
      <Route path={ROUTE_NAMES.SIGN_UP} element={<SignUpContainer />} />
      <Route path={ROUTE_NAMES.SIGN_IN} element={<SignInContainer />} />
    </Routes>
  );
};

export default Router;
