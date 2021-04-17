import { useEffect, useState } from "react";
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
    <div className="m-auto max-w-screen-lg">
      <div className="grid grid-cols-12 auto-rows-max md:auto-rows-auto bg-green-700 h-auto min-h-screen">
        <div className="col-span-12 md:col-span-3 bg-green-500 flex md:items-center">
          <div className="bg-red-700 w-full">
            <Character />
          </div>
        </div>
        <div className="col-span-12 md:col-span-9">
          <button onClick={() => set_count((c) => c - 1)}>-</button>
          <button onClick={() => set_count((c) => c + 1)}>+</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
