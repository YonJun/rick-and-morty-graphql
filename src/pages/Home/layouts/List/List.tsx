import useCharacterStore from "pages/Home/store/character";
import { useEffect } from "react";
import { useGetCharactersQuery } from "__generated__/graphql";
import Item from "./components/Item";

export default function ListCharacter() {
  const { loading, data, error } = useGetCharactersQuery();
  const set_char = useCharacterStore((s) => s.actions.set_char);

  useEffect(() => {
    if (data) {
      if (data.characters.results.length) {
        set_char(data.characters.results[0]);
      }
    }
  }, [data, set_char]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error </p>;
  if (!data) return <p>Sin resultados</p>;
  return (
    <div className="grid grid-flow-row grid-cols-3 md:grid-cols-7 place-items-center gap-4">
      {data.characters.results.map((p) => (
        <Item key={p.id} {...p} />
      ))}
    </div>
  );
}
