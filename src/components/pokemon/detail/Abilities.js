export default function Abilities({ pokeData }) {
  return (
    <>
      <div>
        <div>
          {pokeData.flavor_text_entries.map((el, index) => {
            return el.language.url ===
              "https://pokeapi.co/api/v2/language/9/" &&
              el.version_group.url ===
                "https://pokeapi.co/api/v2/version-group/15/" ? (
              <div key={index}>
                <div>
                  <label>{el.flavor_text}</label>
                </div>
              </div>
            ) : null;
          })}
        </div>
      </div>
    </>
  );
}
