
import Layout from "../../src/components/layout/Layout";
import PokemonDetail from "../../src/components/pokemon/detail/PokemonDetail";

export default function Slug({ slugUrl }) {
  return (
    <>
      <Layout pageTitle="Detail">
        <div className="bg-bac-gray min-h-screen flex">
          <PokemonDetail data={slugUrl} />
        </div>
      </Layout>
    </>
  );
}

export async function getServerSideProps(context) {
  const data = context.params.slug;

  return {
    props: {
      slugUrl: data,
    },
  };
}
