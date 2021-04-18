import { useEffect } from "react";
import { useGetCharacterLazyQuery } from "__generated__/graphql";
import useCharacterStore from "../store/character";

interface DescriptionProps {}

const Description: React.FC<DescriptionProps> = () => {
  const characterId = useCharacterStore((s) => s.id);

  const [getCharacter, { data, error, loading }] = useGetCharacterLazyQuery();

  useEffect(() => {
    getCharacter({
      variables: {
        id: characterId,
      },
    });
  }, [getCharacter, characterId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error </p>;
  if (!data) return <p>Sin resultados</p>;

  const { name, status } = data.character;

  return (
    <div
      style={{ lineHeight: "initial" }}
      className={`md:overflow-hidden	md:overflow-ellipsis font-black md:text-${
        name.length > 16 ? "7" : "8"
      }xl text-3xl`}>
      {name}
    </div>
  );
};

export default Description;
