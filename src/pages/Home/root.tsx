import { useEffect, useState } from "react";
import Character from "./components/Character";
import useCharacterStore from "./store/character";
import Description from "./components/Description";

interface HomeProps {}
const Home: React.FC<HomeProps> = () => {
  const [count, set_count] = useState(1);
  const set_id = useCharacterStore((s) => s.actions.set_id);

  useEffect(() => {
    set_id(String(count));
  }, [count, set_id]);

  return (
    <div className="m-auto max-w-screen-lg bg-green-700 h-auto min-h-screen ">
      <div className="grid grid-cols-12 gap-5 bg-green-700 ">
        <div className="col-span-8 bg-green-500 flex items-end">
          <div className="bg-red-700 w-full">
            <Description />
          </div>
        </div>
        <div className="col-span-4  bg-red-600">
          <Character />
        </div>
        <div className="col-span-12  bg-red-600">
          <button onClick={() => set_count((c) => c - 1)}>-</button>
          <button onClick={() => set_count((c) => c + 1)}>+</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
