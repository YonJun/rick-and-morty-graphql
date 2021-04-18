import Character from "./components/Character";
import Description from "./components/Description";
import List from "./layouts/List";

interface HomeProps {}
const Home: React.FC<HomeProps> = () => {
  return (
    <div className="bg-green-700 m-auto max-w-screen-lg h-auto min-h-screen ">
      <div className="bg-green-700 grid grid-cols-12 gap-5">
        <div className="grid grid-cols-12  col-span-12">
          <div className="bg-green-500 col-span-8 flex items-end">
            <div className="bg-red-700 w-full text-right">
              <Description />
            </div>
          </div>
          <div className="bg-red-600 col-span-4">
            <Character />
          </div>
        </div>
        <div className="bg-red-600 col-span-12">
          <List />
        </div>
      </div>
    </div>
  );
};

export default Home;
