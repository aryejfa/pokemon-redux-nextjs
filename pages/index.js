
import Layout from "../src/components/layout/Layout";
import PokemonList from "../src/components/pokemon/home/PokemonList";

export default function index() {
  return (
    <>
      <Layout pageTitle="Home">
        <div className="bg-bac-gray min-h-screen flex">
          <PokemonList />
        </div>
      </Layout>
    </>
  );
}
