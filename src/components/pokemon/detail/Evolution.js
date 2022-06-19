import PokemonUrlDetailImage from "./PokemonUrlDetailImage";
import { ArrowNarrowRightIcon } from "@heroicons/react/outline";
import React from "react";

export default function Evolution({ pokeData, checkTotDiv }) {
  return (
    <>
      <div
        className={`grid md:grid-cols-${checkTotDiv} grid-cols-1 gap-${checkTotDiv} shadow-md px-4 rounded-md pb-2 mb-4 pt-2`}
      >
        <div className="text-center uppercase">
          <PokemonUrlDetailImageShow data={pokeData.chain.species.name} />
          <div className="font-Roboto-Bold text-primary">
            {pokeData.chain.species.name}
          </div>
        </div>
        {pokeData.chain.evolves_to[0] !== undefined ? (
          <>
            <div className="text-center">
              <div>
                <ArrowNarrowRightIcon className="h-20 w-20 inline-flex text-secondary" />
              </div>
              <div className="font-Roboto-Bold text-pink-400">
                LEVEL UP{" "}
                {pokeData.chain.evolves_to[0].evolution_details[0].min_level ===
                null
                  ? pokeData.chain.evolves_to[0].species.name
                  : pokeData.chain.evolves_to[0].evolution_details[0].min_level}
              </div>
            </div>
            <div className="text-center uppercase">
              <PokemonUrlDetailImageShow
                data={pokeData.chain.evolves_to[0].species.name}
              />
              <div className="font-Roboto-Bold text-primary">
                {pokeData.chain.evolves_to[0].species.name}
              </div>
            </div>

            {pokeData.chain.evolves_to[0].evolves_to[0] !== undefined ? (
              <>
                <div className="text-center">
                  <div>
                    <ArrowNarrowRightIcon className="h-20 w-20 inline-flex text-secondary" />
                  </div>
                  <div className="font-Roboto-Bold text-pink-400">
                    LEVEL UP{" "}
                    {pokeData.chain.evolves_to[0].evolves_to[0]
                      .evolution_details[0].min_level === null
                      ? pokeData.chain.evolves_to[0].evolves_to[0].species.name
                      : pokeData.chain.evolves_to[0].evolves_to[0]
                          .evolution_details[0].min_level}
                  </div>
                </div>
                <div className="text-center">
                  <PokemonUrlDetailImageShow
                    data={
                      pokeData.chain.evolves_to[0].evolves_to[0].species.name
                    }
                  />
                  <div className="font-Roboto-Bold text-primary uppercase">
                    {pokeData.chain.evolves_to[0].evolves_to[0].species.name}
                  </div>
                </div>
              </>
            ) : null}
          </>
        ) : null}
      </div>
    </>
  );
}

export const PokemonUrlDetailImageShow = React.memo(PokemonUrlDetailImage);