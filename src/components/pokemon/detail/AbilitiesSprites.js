import Image from "next/image";
import PokemonUrlDetail from "./PokemonUrlDetail";
import React from "react";

export default function AbilitiesSprites({ pokeData }) {
  return (
    <>
      <div className="hidden md:block ">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-2 pt-6 text-center">
          <div className="text-primary font-Roboto-Bold text-xl underline">
            <label>ABILITIES</label>
          </div>
          <div className="text-primary font-Roboto-Bold text-xl underline">
            <label>SPRITES </label>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-2 pt-4">
        <div className="md:hidden px-1 pt-5 text-primary font-Roboto-Bold text-xl underline">
          <label>ABILITIES</label>
        </div>

        <div className="pt-2 shadow-md px-4 rounded-md pb-2 mb-4 bg-white">
          <div>
            {pokeData.abilities.map((el) => {
              return (
                <div key={el.ability.name}>
                  <div className="font-Roboto-Bold text-primary capitalize">
                    <label>{el.ability.name}</label>
                  </div>
                  <div>
                    <label>
                      {
                        <PokemonUrlDetailShow
                          data={el.ability.url}
                          categories={"abilities"}
                        />
                      }
                    </label>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="md:hidden px-1 text-primary font-Roboto-Bold text-xl underline">
          <label>SPRITES</label>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-2 gap-2 shadow-md px-4 rounded-md pb-2 mb-4 pt-4 bg-white">
          <div className="text-center font-Roboto-Bold text-primary">
            <label>NORMAL</label>
            <div>
              <Image
                className=""
                src={pokeData.sprites.other.home.front_default}
                alt=""
                width={75}
                height={75}
                priority
              />
            </div>
          </div>
          <div className="text-center font-Roboto-Bold text-primary">
            <div>
              <label>SHINY</label>
              <div className="">
                <Image
                  className=""
                  src={pokeData.sprites.other.home.front_shiny}
                  alt=""
                  width={75}
                  height={75}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const PokemonUrlDetailShow = React.memo(PokemonUrlDetail);