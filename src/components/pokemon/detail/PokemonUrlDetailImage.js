import { useDispatch, useSelector } from "react-redux";
import { GetPokemonImage } from "../../../redux/actions/PokemonActions";
import _ from "lodash";
import { useEffect } from "react";
import Image from "next/image";

const PokemonUrlDetailImage = ({ data }) => {
  const pokemonName = data;
  const dispatch = useDispatch();
  const pokemonState = useSelector((state) => state.PokemonImage);

  useEffect(() => {
    dispatch(GetPokemonImage(pokemonName));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ShowData = () => {
    if (!_.isEmpty(pokemonState.data[pokemonName])) {
      const pokeData = pokemonState.data[pokemonName];
      return (
        <div>
          <div>
            <Image
              className=""
              src={pokeData.sprites.other["official-artwork"].front_default}
              alt=""
              width={150}
              height={150}
              priority
            />
          </div>
        </div>
      );
    }

    if (pokemonState.loading) {
      return <p>Loading...</p>;
    }

    if (pokemonState.errorMsg !== "") {
      return <p>{pokemonState.errorMsg}</p>;
    }

    return <p>error getting pokemon</p>;
  };

  return <div className="">{<ShowData />}</div>;
};

export default PokemonUrlDetailImage;
