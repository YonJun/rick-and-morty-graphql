import { useEffect, useState } from "react";
import Character from "./components/Character";
import useCharacterStore from "./store/character";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: auto;
  background-color: tomato;
  width: 100%;
  max-width: 800px;

  .character__container {
  }

  .list__container {
  }
`;

interface HomeProps {}
const Home: React.FC<HomeProps> = () => {
  const [count, set_count] = useState(1);
  const set_id = useCharacterStore((s) => s.actions.set_id);

  useEffect(() => {
    set_id(String(count));
  }, [count, set_id]);

  return (
    <Wrapper>
      <div className="character__container">
        <Character />
      </div>

      <div className="list__character">
        <button onClick={() => set_count((c) => c - 1)}>-</button>
        <button onClick={() => set_count((c) => c + 1)}>+</button>
      </div>
    </Wrapper>
  );
};

export default Home;
