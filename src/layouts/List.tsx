import { useGetCharactersQuery } from "../__generated__/graphql";
import Item from "./components/Item";

export default function ListCharacter() {
  const { loading, error, data } = useGetCharactersQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error </p>;
  if (!data) return <p>Sin resultados</p>;
  // const result = data!.characters!.results!;
  // console.log(result);
  return (
    <div>
      <div>
        {data.characters.results.map((p) => (
          <Item key={p.id} {...p} />
        ))}
      </div>
    </div>
  );
}
