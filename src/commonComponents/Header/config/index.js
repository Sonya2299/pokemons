import { startCase } from "lodash";
import { ROUTE_NAMES } from "routes/routeNames";

export const NAVIGATION_ITEMS = {
  public: [
    {
      title: "Home",
      path: ROUTE_NAMES.HOME,
    },
    {
      title: "Log In",
      path: ROUTE_NAMES.SIGN_IN,
    },
    {
      title: "Sign UP",
      path: ROUTE_NAMES.SIGN_UP,
    },
  ],
  private: [
    {
      title: startCase("Pokemons"),
      path: ROUTE_NAMES.POKEMONS,
    },
  ],
};

export const publicNavsKey = "public";
export const privateNavsKey = "private";
