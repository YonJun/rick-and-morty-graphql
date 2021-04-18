import useCharacterStore from "../store/character";

interface DescriptionProps {}

const Description: React.FC<DescriptionProps> = () => {
  const char = useCharacterStore((s) => s.char);
  if (!char) {
    return <div>loading...</div>;
  }
  const { name } = char;

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
