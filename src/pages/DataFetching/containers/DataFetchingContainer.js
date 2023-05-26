import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { ROUTE_NAMES } from "routes/routeNames";
import MyPagination from "commonComponents/Pagination";
import PokemonCard from "commonComponents/PokemonCard";
import Spinner from "commonComponents/Spinner";
import { getPokemonsThunk } from "../api";
import { useCart, usePagination } from "hooks";

const DataFetchingContainer = () => {
  const dispatch = useDispatch();
  //   const [page, handlePageChange] = usePagination(1);

  const { addItemToCart } = useCart();

  const navigate = useNavigate();

  const pokemons = useSelector((state) => state.dataFetching.data);
  const errors = useSelector((state) => state.dataFetching.errors);
  const isLoading = useSelector((state) => state.dataFetching.isLoading);

  const handlePokemonsLoad = () => {
    dispatch(getPokemonsThunk());
  };

  //  useEffect(() => {
  //     dispatch(getPokemonsThunk({ page, limit: 10 }));
  //   }, [page]);

  const handleLearnMore = (id) => {
    navigate(`${ROUTE_NAMES.POKEMONS}/${id}`);
  };

  return (
    <div style={{ maxWidth: "1270px", margin: "0 auto" }}>
      <h1>Pokemons</h1>

      <button onClick={handlePokemonsLoad}> Get POKEMONS</button>

      {errors && <div style={{ color: "red" }}>{errors}</div>}

      <div
        style={{
          display: "flex",
          gap: 10,
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        {pokemons.map(({ name, image, id, price }) => (
          <PokemonCard
            key={id}
            id={id}
            name={name}
            image={image}
            price={price}
            handleLearnMore={handleLearnMore}
            handleAddToCart={addItemToCart}
          />
        ))}
      </div>
      {/* <MyPagination page={page} handlePageChange={handlePageChange} /> */}
    </div>
  );
};

export default DataFetchingContainer;
