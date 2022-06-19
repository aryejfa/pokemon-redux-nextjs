import { useDispatch, useSelector } from "react-redux";
import _, { isEqual } from "lodash";
import { useEffect, useRef } from "react";
import Abilities from "./Abilities";
import Evolution from "./Evolution";
import Weeknesses from "./Weeknesses";
import { GetPokemonUrl } from "../../../redux/actions/PokemonActions";

const PokemonUrlDetail = ({ data, categories }) => {
  const pokemonNameUrl = data;
  const dispatch = useDispatch();
  const pokemonState = useSelector((state) => state.PokemonUrl);
  const checkTot = useRef(5);

  useEffect(() => {
    dispatch(GetPokemonUrl(pokemonNameUrl));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ShowData = () => {
    if (!_.isEmpty(pokemonState.data[pokemonNameUrl])) {
      const pokeData = pokemonState.data[pokemonNameUrl];
      const checkTotDiv = 5;
      if (categories === "evolution") {
        checkTotDiv = checkTot.current = 1;
        if (!isEqual(pokeData.chain.evolves_to[0])) {
          checkTotDiv = checkTot.current = 3;
          if (!isEqual(pokeData.chain.evolves_to[0].evolves_to[0])) {
            checkTotDiv = checkTot.current = 5;
          }
        }
      }

      return categories === "abilities" ? (
        <Abilities pokeData={pokeData} />
      ) : categories === "weeknesses" ? (
        <Weeknesses pokeData={pokeData} />
      ) : categories === "evolution" ? (
        <Evolution pokeData={pokeData} checkTotDiv={checkTotDiv} />
      ) : null;
    }

    if (pokemonState.loading) {
      return <p>Loading...</p>;
    }

    if (pokemonState.errorMsg !== "") {
      return <p>{pokemonState.errorMsg}</p>;
    }

    return <p>error getting pokemon</p>;
  };

  return (
    <div className="">
      <ShowData />
    </div>
  );
};

export default PokemonUrlDetail;
