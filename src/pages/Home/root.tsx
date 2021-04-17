import { Fragment, useEffect, useState } from "react";
import Character from "./components/Character";
import useCharacterStore from "./store/character";

interface HomeProps {}
const Home: React.FC<HomeProps> = () => {
  const [count, set_count] = useState(1);
  const set_id = useCharacterStore((s) => s.actions.set_id);

  useEffect(() => {
    set_id(String(count));
  }, [count, set_id]);

  return (
    <Fragment>
      <Character />
      <button onClick={() => set_count((c) => c - 1)}>-</button>
      <button onClick={() => set_count((c) => c + 1)}>+</button>
    </Fragment>
  );
};

export default Home;
