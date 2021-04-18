import { ApolloError } from "@apollo/client";
import useCharacterStore from "pages/Home/store/character";
import { useEffect } from "react";
import {
  CharacterSnippetFragment,
  useGetCharactersQuery,
} from "__generated__/graphql";
import Item from "./components/Item";

interface ListCharacterProps {
  data: CharacterSnippetFragment[];
  loading: boolean;
  error?: ApolloError;
}

const ListCharacter: React.FC<ListCharacterProps> = ({
  data,
  loading,
  error,
}) => {
  const set_char = useCharacterStore((s) => s.actions.set_char);

  useEffect(() => {
    if (data && data.length) {
      set_char(data[0]);
    }
  }, [data, set_char]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error </p>;
  if (!data) return <p>Sin resultados</p>;
  return (
    <div className="grid grid-flow-row grid-cols-3 md:grid-cols-6 lg:grid-cols-7 place-items-center gap-4">
      {data.map((p) => (
        <Item key={p.id} {...p} />
      ))}
    </div>
  );
};

export default ListCharacter;
