import { useEffect } from "react";
import { usePalette } from "react-palette";
import styled from "styled-components";
import useCharacterStore from "../store/character";

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

  useEffect(() => {
    if (data) {
      if (data.lightMuted)
        document.body.style.backgroundColor = data.lightMuted;
    }
  }, [data]);

  if (!char) {
    return (
      <Wrapper className="flex items-center justify-center">
        <span>Loading...</span>
      </Wrapper>
    );
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
