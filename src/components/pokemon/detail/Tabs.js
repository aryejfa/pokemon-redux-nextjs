import Image from "next/image";
import React, { useState } from "react";
import PokemonUrlDetail from "./PokemonUrlDetail";

export default function Tabs({
  color,
  pokeData,
  pokeDataSpecies,
  pokemonName,
}) {
  const Show = () => {
    const [openTab, setOpenTab] = useState(1);
    return (
      <>
        <div className="flex flex-wrap">
          <div className="w-full">
            <ul
              className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
              role="tablist"
            >
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "font-Roboto-Bold text-xl font-bold uppercase px-5 py-3 shadow-lg rounded-[10rem] block leading-normal " +
                    (openTab === 1
                      ? "text-white bg-" + color + "-400"
                      : "text-" + color + "-400 bg-white")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  STATS
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "font-Roboto-Bold text-xl font-bold uppercase px-5 py-3 shadow-lg rounded-[10rem] block leading-normal " +
                    (openTab === 2
                      ? "text-white bg-" + color + "-400"
                      : "text-" + color + "-400 bg-white")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
                >
                  EVOLUTION
                </a>
              </li>
            </ul>
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-0 shadow-lg rounded-lg">
              <div className="px-4 py-5 flex-auto">
                <div className="tab-content tab-space">
                  <div
                    className={openTab === 1 ? "block" : "hidden"}
                    id="link1"
                  >
                    <div className="hidden md:block">
                      <div className="grid md:grid-cols-3 grid-cols-1 gap-3 text-center">
                        <div className="text-primary font-Roboto-Bold text-xl underline">
                          <label>STATS</label>
                        </div>
                        <div className="text-primary font-Roboto-Bold text-xl underline uppercase">
                          <label>{pokemonName}</label>
                        </div>
                        <div className="text-primary font-Roboto-Bold text-xl underline">
                          <label>DESCIPTION</label>
                        </div>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-3 grid-cols-1 gap-3 lg:pt-3">
                      <div className="md:hidden text-primary font-Roboto-Bold text-xl underline">
                        <label>STATS</label>
                      </div>

                      <div className="shadow-md px-4 rounded-md pb-2 pt-2 uppercase">
                        {pokeData.stats.map((el) => {
                          return (
                            <div key={el.stat.name}>
                              <label>
                                {" "}
                                {el.stat.name} ({el.base_stat}%){" "}
                              </label>
                              <div>
                                <progress max="100" value={el.base_stat} />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <div className="md:hidden text-primary font-Roboto-Bold text-xl underline uppercase">
                        <label>{pokemonName}</label>
                      </div>

                      <div className="text-center shadow-md px-4 rounded-md pb-2 pt-2">
                        <Image
                          className=""
                          src={
                            pokeData.sprites.other["official-artwork"]
                              .front_default
                          }
                          alt=""
                          width={200}
                          height={200}
                          priority
                        />
                        <div>
                          <span className="capitalize">
                            {pokeData.types
                              .map((poke) => poke.type.name)
                              .join(", ")}
                          </span>
                        </div>
                      </div>
                      <div className="md:hidden text-primary font-Roboto-Bold text-xl underline">
                        <label>DESCIPTION</label>
                      </div>
                      <div className="shadow-md px-4 rounded-md pb-2 pt-2">
                        <div>
                          {pokeDataSpecies.flavor_text_entries.map(
                            (el, index) => {
                              return el.language.url ==
                                "https://pokeapi.co/api/v2/language/9/" &&
                                el.version.url ==
                                  "https://pokeapi.co/api/v2/version/25/" ? (
                                <div key={index}>
                                  <span>{el.flavor_text}</span>
                                </div>
                              ) : null;
                            }
                          )}
                        </div>

                        <div className="pt-4">
                          <label className="font-Roboto-Bold text-primary">
                            Weaknesses
                          </label>
                        </div>
                        {pokeData.types.map((el) => {
                          return (
                            <div key={el.type.name} className="capitalize">
                              <span>
                                {
                                  <PokemonUrlDetailShow
                                    data={el.type.url}
                                    categories={"weeknesses"}
                                  />
                                }
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div
                    className={openTab === 2 ? "block" : "hidden"}
                    id="link2"
                  >
                    <div className="grid md:grid-cols-1 grid-cols-1 gap-1 text-center hidden md:block">
                      <div className="text-primary font-Roboto-Bold text-xl underline">
                        EVOLUTION
                      </div>
                    </div>
                    <div className="md:hidden px-1 pt-1 text-primary font-Roboto-Bold text-xl pb-2 underline">
                      <label>EVOLUTION</label>
                    </div>

                    <PokemonUrlDetailShow
                      data={pokeDataSpecies.evolution_chain.url}
                      categories={"evolution"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  return <Show />;
}

export const PokemonUrlDetailShow = React.memo(PokemonUrlDetail);
