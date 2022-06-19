import { CircularProgressbar } from "react-circular-progressbar";
import Image from "next/image";

export default function BreedingCapture({ pokeDataSpecies, male, female }) {
  const Show = () => {
    return (
      <>
        <div className="hidden md:block">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-2 pt-6 text-center">
            <div className="text-pink-400 font-Roboto-Bold text-xl underline">
              <label>BREEDING</label>
            </div>
            <div className="text-pink-400 font-Roboto-Bold text-xl underline">
              <label>CAPTURE</label>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-2 pt-4">
          <div className="md:hidden px-1 text-pink-400 font-Roboto-Bold text-xl underline">
            <label>BREEDING</label>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-3 gap-3 shadow-md px-4 rounded-md pb-2 pt-2 bg-white">
            <div>
              <label className="font-Roboto-Bold text-primary">EGG GROUP</label>
              {pokeDataSpecies.egg_groups.map((el) => {
                return (
                  <div key={el.name} className="uppercase">
                    <label>{el.name}</label>
                  </div>
                );
              })}
            </div>
            <div>
              <div>
                <label className="font-Roboto-Bold text-primary">
                  HATCH TIME{" "}
                </label>
                <div>
                  <label>
                    {parseInt(pokeDataSpecies.hatch_counter) * 256} Steps{" "}
                  </label>
                </div>
                <div>
                  <label>{pokeDataSpecies.hatch_counter} Cycles</label>
                </div>
              </div>
            </div>
            <div>
              <label className="font-Roboto-Bold text-primary">GENDER</label>
              {parseInt(pokeDataSpecies.gender_rate) < 0 ? (
                <>
                  <div>
                    <label>Genderless</label>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <label>
                      <Image
                        className=""
                        src="/male.png"
                        alt=""
                        width={20}
                        height={20}
                        priority
                      />
                      {male} %
                    </label>
                  </div>
                  <div>
                    <label>
                      <Image
                        className=""
                        src="/female.png"
                        alt=""
                        width={20}
                        height={20}
                        priority
                      />
                      {female} %
                    </label>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="md:hidden pt-3 px-1 text-pink-400 font-Roboto-Bold text-xl underline">
            <label>CAPTURE</label>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-3 gap-3 shadow-md px-4 rounded-md pb-2 pt-2 bg-white">
            <div>
              <label className="font-Roboto-Bold text-primary">HABITAT</label>
              <div className="uppercase">
                <label>{pokeDataSpecies.habitat.name}</label>
              </div>
            </div>
            <div>
              <div>
                <label className="font-Roboto-Bold text-primary">
                  GENERATION
                </label>
                <div className="uppercase">
                  <label>{pokeDataSpecies.generation.name}</label>
                </div>
              </div>
            </div>
            <div className="text-center">
              <label className="font-Roboto-Bold text-primary">
                CAPTURE RATE
              </label>
              <div>
                <label>
                  <div
                    className="inline-flex"
                    style={{ width: 50, height: 50 }}
                  >
                    <CircularProgressbar
                      value={pokeDataSpecies.capture_rate}
                      text={`${pokeDataSpecies.capture_rate}%`}
                      className="font-Roboto-Bold text-xl"
                    />
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  return <Show />;
}
