import { Fragment, useEffect } from "react";
import { useGetCharacterLazyQuery } from "__generated__/graphql";
import useCharacterStore from "../store/character";

interface CharacterProps {}

const Character: React.FC<CharacterProps> = () => {
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

  const { image, name, status } = data.character;

  return (
    <Fragment>
      <p>
        image: <strong>{image}</strong>
      </p>
      <p>
        name: <strong>{name}</strong>
      </p>
      <p>
        status: <strong>{status}</strong>
      </p>
    </Fragment>
  );
};

export default Character;
