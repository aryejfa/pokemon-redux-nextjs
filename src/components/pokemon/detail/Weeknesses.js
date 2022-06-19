export default function Weeknesses({ pokeData }) {
  return (
    <>
      <span className="capitalize">
        {pokeData.damage_relations.double_damage_from
          .map((el) => {
            return `${el.name} 2x`;
          })
          .join(", ")}
      </span>
    </>
  );
}
