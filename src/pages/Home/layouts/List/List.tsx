import { ApolloError } from "@apollo/client";
import useCharacterStore from "pages/Home/store/character";
import { useEffect } from "react";
import { CharacterSnippetFragment } from "__generated__/graphql";
import Item from "./components/Item";

interface ListCharacterProps {
  data: CharacterSnippetFragment[];
  loading: boolean;
  error?: ApolloError;
}

const Wrapper: React.FC<{}> = ({ children }) => (
  <div className="grid grid-flow-row grid-cols-3 md:grid-cols-6 lg:grid-cols-7 place-items-center gap-4">
    {children}
  </div>
);

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

  if (loading)
    return (
      <Wrapper>
        {[...(new Array(21).keys() as any)].map((index) => (
          <div className="animate-pulse" key={index}>
            <div
              style={{ width: 120, height: 120 }}
              className="rounded-md bg-blue-400 h-full w-full"
            />
          </div>
        ))}
      </Wrapper>
    );
  if (error) return <p>Error </p>;
  if (!data) return <p>Sin resultados</p>;
  return (
    <Wrapper>
      {data.map((p) => (
        <Item key={p.id} {...p} />
      ))}
    </Wrapper>
  );
};

export default ListCharacter;
