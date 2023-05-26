import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import camelCase from "lodash/camelCase";

import { getPokemonDetailsThunk } from "../api";
import {
  isPokemonDetailsLoadingSelector,
  pokemonNameSelector,
  pokemonSpritesSelector,
  pokemonStatsSelector,
  pokemonAbilitiesSelector,
} from "../selectors";

import Spinner from "commonComponents/Spinner";
import StatItem from "../components/StatItem";
import { STAT_ICON_MAP } from "../config/statsConfig";

import styles from "./styles.module.scss";

const PokemonDetailsContainer = () => {
  const dispatch = useDispatch();

  const name = useSelector(pokemonNameSelector);
  const sprites = useSelector(pokemonSpritesSelector);
  const stats = useSelector(pokemonStatsSelector);
  const abilities = useSelector(pokemonAbilitiesSelector);

  const isLoading = useSelector(isPokemonDetailsLoadingSelector);

  const { pokemonName } = useParams();

  useEffect(() => {
    dispatch(getPokemonDetailsThunk(pokemonName));
  }, [pokemonName]);

  return (
    <div className={styles.container}>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className={styles.wrapper}>
          <div className>
            <h2 className={styles.title}> {name} </h2>
            <img src={sprites?.front_default} alt="" width={300} height={300} />
          </div>

          <div>
            {stats.map(({ statName, statValue }) => (
              <StatItem
                key={statName}
                statName={statName}
                statValue={statValue}
                picture={STAT_ICON_MAP[camelCase(statName)]}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PokemonDetailsContainer;
