import "react-circular-progressbar/dist/styles.css";
import { useDispatch, useSelector } from "react-redux";
import {
  GetPokemon,
  GetPokemonSpecies,
} from "../../../redux/actions/PokemonActions";
import _ from "lodash";
import { useEffect } from "react";
import Tabs from "./Tabs";
import BreedingCapture from "./BreedingCapture";
import AbilitiesSprites from "./AbilitiesSprites";
import { useRouter } from "next/router";

const PokemonDetail = (props) => {
  const pokemonName = props.data;
  const dispatch = useDispatch();
  const pokemonState = useSelector((state) => state.Pokemon);
  const pokemonStateSpecies = useSelector((state) => state.PokemonSpecies);
  const router = useRouter();

  useEffect(() => {
    dispatch(GetPokemon(pokemonName));
    dispatch(GetPokemonSpecies(pokemonName));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ShowData = () => {
    if (
      !_.isEmpty(pokemonState.data[pokemonName]) &&
      !_.isEmpty(pokemonStateSpecies.data[pokemonName])
    ) {
      const pokeData = pokemonState.data[pokemonName];
      const pokeDataSpecies = pokemonStateSpecies.data[pokemonName];

      const female = (100 / 8) * parseInt(pokeDataSpecies.gender_rate);
      const male = 100 - female;

      return (
        <div className="container mx-auto md:px-12 px-6 pt-2">
          <Tabs
            color="yellow"
            pokeData={pokeData}
            pokeDataSpecies={pokeDataSpecies}
            pokemonName={pokemonName}
          />
          {/* <div className="bg-yellow-400"></div>
          <div className="text-yellow-400"></div> */}
          <BreedingCapture
            pokeDataSpecies={pokeDataSpecies}
            male={male}
            female={female}
          />

          <AbilitiesSprites pokeData={pokeData} />
        </div>
      );
    }

    if (pokemonState.loading) {
      return <p>Loading...</p>;
    }

    if (pokemonState.errorMsg !== "") {
      router.push("/");
      return <p>{pokemonState.errorMsg}</p>;
    }

    return <p>error getting pokemon</p>;
  };

  return (
    <>
      <ShowData />
    </>
  );
};

export default PokemonDetail;
