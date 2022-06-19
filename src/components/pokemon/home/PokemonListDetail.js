import { useDispatch, useSelector } from "react-redux";
import { GetPokemon } from "../../../redux/actions/PokemonActions";
import _ from "lodash";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const PokemonList = ({ data }) => {
  const pokemonName = data;
  const dispatch = useDispatch();
  const pokemonState = useSelector((state) => state.Pokemon);

  useEffect(() => {
    dispatch(GetPokemon(pokemonName));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ShowData = () => {
    if (!_.isEmpty(pokemonState.data[pokemonName])) {
      const pokeData = pokemonState.data[pokemonName];
      return (
        <Link href={`/pokemon/${pokemonName}`} passHref>
          <div className="Card">
            <span className="Card--id">#{("00" + pokeData.id).slice(-3)}</span>
            <div className="image">
              <Image
                className="Card--image"
                src={pokeData.sprites.other["official-artwork"].front_default}
                alt=""
                width={150}
                height={150}
                priority
              />
              <h1 className="Card--name">{pokemonName}</h1>
            </div>
            <div className="Card--details">
              {pokeData.types.map((poke) => poke.type.name).join(", ")}
            </div>
          </div>
        </Link>
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

  return (
    <>
      <ShowData />
    </>
  );
};

export default PokemonList;
