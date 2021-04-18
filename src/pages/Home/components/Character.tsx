import useCharacterStore from "../store/character";

const Character: React.FC<{}> = () => {
  const char = useCharacterStore((s) => s.char);
  if (!char) {
    return <div>loading...</div>;
  }
  const { image, name } = char;

  return (
    <div className="bg-red-500">
      <img
        src={image}
        alt={name}
        width="100%"
        height="auto"
        className="block rounded "
      />
    </div>
  );
};

export default Character;
