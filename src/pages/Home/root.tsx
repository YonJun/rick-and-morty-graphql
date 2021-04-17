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
    <div className="h-auto min-h-screen bg-yellow-100 flex items-center justify-center">
      <div
        className="bg-secondary-main lg:container p-5"
        style={{ borderRadius: 40 }}>
        <div className="grid grid-cols-12 bg-red-500">
          <div className="col-span-4 bg-green-500">
            <Character />
          </div>
          <div className="col-span-8 bg-green-700">
            <button onClick={() => set_count((c) => c - 1)}>-</button>
            <button onClick={() => set_count((c) => c + 1)}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
