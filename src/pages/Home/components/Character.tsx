import { useEffect } from "react";
import { usePalette } from "react-palette";
import styled from "styled-components";
import useCharacterStore from "../store/character";
import useColorStore from "../store/colorStore";

const Wrapper = styled.div`
  position: relative;
  width: 100%;

  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;

const Character: React.FC<{}> = () => {
  const char = useCharacterStore((s) => s.char);
  const { data } = usePalette(char ? char.image : "");
  const set_color = useColorStore((s) => s.set_color);

  useEffect(() => {
    if (data) {
      if (data.lightMuted)
        document.body.style.backgroundColor = data.lightMuted;

      if (data.vibrant) set_color(data.vibrant);
    }
  }, [data, set_color]);

  if (!char) {
    return (
      <Wrapper className="flex items-center justify-center">
        <span>Loading...</span>
      </Wrapper>
    );
  }
  const { image, name, status } = char;

  return (
    <div className="bg-red-500">
      <img
        src={image}
        alt={name}
        width="100%"
        height="auto"
        className={`block rounded filter ${status === "Dead" && "grayscale"}`}
      />
    </div>
  );
};

export default Character;
